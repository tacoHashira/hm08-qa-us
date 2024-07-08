# Sprint 8 Project

# Project Description
    Setting up the environment and writing code to test the functionality of the Urban Routes app on VS

# Technologies & Techniques Used
    Git Bash, GitHub, VS Code, JavaScript, JSON
    
# Test Instructions
Preparing test environments:

    *Cloning the hm08-qa-us repository for local access
        1. Open the Git Bash terminal emulator
        2. Use the following process to create a directory to store project:
             cd ~               # make sure you're in your home directory
             mkdir projects     # create a folder called projects
             cd projects        # change directory into the new projects folder
        3. Use the following command to clone the repo using ssh authentication:
             git clone git@github.com:username/hm08-qa-us.git
    *In VS Code
        1. Select File → Open Folder and then select the hm08-qa-us folder
        2. Run npm install from the console in your project folder
        3. In wdio.conf.js, replace the base URL with the unique link generated after the launch of Urban Routes server
 
Running tests: 
        1. Open createAnOrder.e2e.js
        2. Open terminal
        3. Run command: npm run wdio
    
