import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "What is your URL?",
      name: "URL",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
   

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-code.png"));

   console.log("QR code generated successfully");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
