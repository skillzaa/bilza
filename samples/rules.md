# Rules for this folder

### Entire folder follow the same pattern

### Self Contained Folder
- This folder should not have ANY dependency outside of this folder. I should be able to move this folder to any other place and every thing should be working as it is. At "00lib" folder I will have all the versions in compiled form. At times I may be required aproject to src folder but once its complete it should finally point back to the compiled lib version in "00lib" folder. *The sample is finally linked to a compiled copy of the lib. No other dependencies*.
### Main index.html
- main index.html has a list of all samples
- each sample (is in its own folder) consits of an index.html and index.js. If required we can add other files but these 2 must be present.

