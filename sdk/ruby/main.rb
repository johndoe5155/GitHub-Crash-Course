require "octokit"
require "dotenv/load"

client = Octokit::Client.new(access_token: ENV["GH_TOKEN"])

repo = "Mars-Rav/GitHub-Crash-Course"
new_branch_name = "goingwithanothertest"
base_branch = "main"

base_branch_sha = client.ref(repo, "/heads/#{base_branch}").object.sha


client.create_ref(repo, "heads/#{new_branch_name}", base_branch_sha)