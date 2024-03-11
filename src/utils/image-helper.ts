export const getBase64 = (file: File) => new Promise<string>(function (resolve, reject) {
// takes a file selected by user in app, creates an async promise that will resolve with a string value.

    let reader = new FileReader();
    // creates a FileReader, used to read the contents of files selected by user
    reader.readAsDataURL(file);
    // read contents of file as a base64-encoded string
    reader.onload = () => resolve(reader.result as string);
    //callback function when file successfully loaded, resolves promise as string
    reader.onerror = (error) => reject(`'Error:', ${error}`);
})

// getBase64 takes a file as input, reads it as a data URL using a filereader, returns a promise that resolves with the base64-endcoded string representing the file's contents. 