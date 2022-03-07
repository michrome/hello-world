# InstaTAM

## AssetBuildStack

A CloudFormation stack that sets up a CodeBuild Project. The project deploys a static SvelteKit build to a S3 Bucket. When new images are added to ouur images folder, S3 sends a notification to a Lambda function which starts the project build.

### Creating the stack

aws cloudformation create-stack \
--profile j4e \
--stack-name instatam-asset-build-stack \
--template-body file://asset-build-stack.json \
--tags 'Key=project,Value=instatam' \
--region=us-east-1 \
--capabilities CAPABILITY_IAM \
--parameters ParameterKey=CodeBuildProjectGitUrl,ParameterValue=https://github.com/michrome/instatam \
ParameterKey=CodeBuildProjectName,ParameterValue=InstaTAM \
ParameterKey=DomainName,ParameterValue=instatam.click

### Deleteing the stack
aws cloudformation delete-stack \
--profile j4e \
--stack-name instatam-asset-build-stack \
--region=us-east-1

### Build environment variables

- CANONICAL_BASE_URL e.g. https://example.com
- S3 client region e.g. us-east-1 (can be obtained from the stack's AWS::Region pseudo parameter)
- S3 bucket name
- S3 origin path
- images folder

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
