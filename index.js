const config = require("./config");
const { DocumentProcessorServiceClient } =
  require("@google-cloud/documentai").v1;

const processorPath = `projects/${config.project_id}/locations/${config.location}/processors/${config.processor_id}`;

async function parseExpenseDocument() {
  try {
    const client = new DocumentProcessorServiceClient();

    const fs = require("fs").promises;

    const filePath = "./receipt.pdf";
    const imageFile = await fs.readFile(filePath);

    const encodedImage = Buffer.from(imageFile).toString("base64");

    const request = {
      name: processorPath,
      rawDocument: {
        content: encodedImage,
        mimeType: "application/pdf",
      },
    };

    const [result] = await client.processDocument(request);

    console.log(result);
  } catch (error) {
    console.error("Error processing document:", error.message);
  }
}

parseExpenseDocument();
