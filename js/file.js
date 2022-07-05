// Get the file uploader by id
const fileUploader = document.getElementById('file-uploader');

// Listen to the change event and read metadata
fileUploader.addEventListener('change', (event) => {
  // Get the FileList array
  const files = event.target.files;

  // Loop through the files and get metadata
  for (const file of files) {
    const name = file.name;
    const type = file.type ? file.type: 'NA';
    const size = file.size;
    const lastModified = file.lastModified;
    console.log({ file, name, type, size, lastModified });
  }
});
