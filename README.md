# Language AI

## Outline
- Build a basic web app to parse user input strings.
    - takes input.
    - identifies words.
    - figures out lexical cat.
    - uses this info to: (1) find known words (2) learn more about know words.
    - uses context info to learn and categorize new words.
- Build learning model to:
    - remember the individual words.
    - evaluate the mood of the input.
    - recognize and split words into morphemes.
    - understand general morpheme meaning and/or function.
    - evaluate 'speech act'.
- Build model to assemble morphemes based on goal output.
- Evolve this to coherent language.

### Shortcuts in Terminal
ls | Lists files and directories at current location.  
cd <name_of_path> | Navigates into selected location.  
cd .. | Navigates up a level in file path.  
mkdir <name_of_new_directory> | Creates directory in location.  
touch <name_of_file> | Creates file in location with name.  
rm <name_of_file> | Removes file.  
rm -rf <name_of_directory> | Removes directory and all included files.  

### Git Shortcuts
git add . | Adds all changed files, including deletions.  
git add <file_name> | Adds only named files.  
git commit -m "<commit_message>" | Commits changes with message.  
git push | Pushes changes to GitHub.  
git pull | Pulls changes.  