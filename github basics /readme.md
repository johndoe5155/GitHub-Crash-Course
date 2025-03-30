## .git : GitHub Folder 
A folder that turns a folder/project into a GitHub repo.  
`git reset` moves Staged Changes back to Changes.

## Commits
Will commit the changes to the `Git Tree`
> Will open the Commit file in the editor of choice.
```sh
git commit
```
When running the command locally, we have to configure the default editor:  
```sh
git config --global core.editor {editor-name}
```

## .gitconfig File 
Stores global Git configuration like name, email, editor, ...etc.
> To list the content of the .gitconfig file:
```sh
git config --list
```

> To show commit logs of the `Git Tree`:
```sh
git log
```

## Remote Access
### SSH
> Linux Shell Command to Generate an SSH Key
```sh
ssh-keygen -t rsa
```

## Branches
> To list all the branches:
```sh
git branch
```

> To create a new branch:
```sh
git branch {branch-name}
```

> To switch to a branch:
```sh
git checkout {branch-name}
```


## Remotes

## Stashing

## Merging

**TODO:** 
    - Review SSH 
    - Check the difference between Authentication Key and Signing Key in SSH
    