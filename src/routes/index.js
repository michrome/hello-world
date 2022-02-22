import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { canonicalUrl } from '$lib/helpers';

const REGION = 'us-east-1';
const BUCKET_NAME = 'hello-yoga.co.uk';
const ORIGIN_PATH = 'www';
const IMAGES_FOLDER = 'images';
const IMAGES_PREFIX = [ORIGIN_PATH, IMAGES_FOLDER].join('/');
export async function get() {
	const build = { date: Date.now() };

	const imageUrls = [];
	const client = new S3Client({ region: 'us-east-1' });
	const command = new ListObjectsV2Command({ Bucket: BUCKET_NAME, Prefix: IMAGES_PREFIX });
	const response = await client.send(command);
	response.Contents?.forEach((item) => {
		if (item.Size > 0) imageUrls.push(canonicalUrl(item.Key.slice(3)));
	});

	return {
		body: { build, imageUrls }
	};
}
