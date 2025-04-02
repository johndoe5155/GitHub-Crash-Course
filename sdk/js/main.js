import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
    userAgent: 'main.js v1.0.0'
});

const owner = "Mars-Rav"
const repo = "GitHub-Crash-Course"
const baseBranchName = "main"
const newBranchName = "test"


try {
    // Get the reference of the base branch
    const baseBranch = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${baseBranchName}`
    });

    // Create the new branch using the SHA of the base branch
    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${newBranchName}`,
      sha: baseBranch.data.object.sha
    });

    console.log(`Branch ${newBranchName} created successfully from ${baseBranchName}`);
} catch (error) {
    console.error(`Error creating branch: ${error.message}`);
}
