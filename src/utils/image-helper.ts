export const getBase64 = (file: File) => new Promise<string>(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(`'Error:', ${error}`);
})