import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { canonicalUrl } from '$lib/helpers';

const AWS_REGION = process.env.AWS_REGION;
const ASSET_BUCKET_NAME = process.env.ASSET_BUCKET_NAME;
const ASSET_FOLDER = process.env.ASSET_FOLDER;
const IMAGE_FOLDER = process.env.IMAGE_FOLDER;

export async function get() {
	const build = { date: Date.now() };

	const imageUrls = [];
	const client = new S3Client({ region: AWS_REGION });
	const command = new ListObjectsV2Command({ Bucket: ASSET_BUCKET_NAME, Prefix: IMAGE_FOLDER });
	const response = await client.send(command);
	let contents = response.Contents;
	contents?.sort((a, b) => b.LastModified - a.LastModified);
	contents?.forEach((item) => {
		if (item.Size > 0) imageUrls.push(canonicalUrl(item.Key.slice(ASSET_FOLDER.length)));
	});

	return {
		body: { build, imageUrls }
	};
}
