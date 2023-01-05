import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const pdf = (products) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportPdf = [
    {
      text: "Products",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 15, 20],
    },
  ];
  const data = products.map((product) => {
    return [
      { text: product._id, fontSize: 9, margin: [2, 0, 2, 10] },
      { text: product.name, fontSize: 9, margin: [2, 0, 2, 0] },
      { text: product.category, fontSize: 9, margin: [2, 0, 2, 0] },
      { text: product.price, fontSize: 9, margin: [2, 0, 2, 0] },
      { text: product.quantity, fontSize: 9, margin: [2, 0, 2, 0] },
    ];
  });
  const details = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*", "*", "*"],
        body: [
          [
            { text: "ID", style: "tableHeader", fontSize: 10 },
            { text: "Name", style: "tableHeader", fontSize: 10 },
            { text: "Category", style: "tableHeader", fontSize: 10 },
            { text: "Price", style: "tableHeader", fontSize: 10 },
            { text: "Quantity", style: "tableHeader", fontSize: 10 },
          ],
          ...data,
        ],
      },
      layout: "lightHorizontalLines",
    },
  ];
  function Footer(currentPage, pageCount) {
    return [
      {
        text: currentPage + "/" + pageCount,
        alignments: "right",
        fontSize: 9,
        bold: true,
        margin: [10, 10, 20, 10],
      },
    ];
  }

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportPdf],
    content: [details],
    footer: Footer,
  };
  pdfMake.createPdf(docDefinitions).download();
};

export default pdf;
