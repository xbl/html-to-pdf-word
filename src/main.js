const fs = require('fs').promises;
const HTMLtoDOCX = require('html-to-docx');
const puppeteer = require('puppeteer');

const pdf = require('html-pdf');
const path = require('path');


(async () => {
  // const htmlString = await fs.readFile('./template.html', 'utf8');

  const browser = await puppeteer.launch();
  // browser.on('targetcreated', async (target) => {
  //   console.log('hello');
  //   let s = target.url();
  //   //the test opens an about:blank to start - ignore this
  //   if (s == 'about:blank') {
  //       return;
  //   }
    
  //   //unencode the characters after removing the content type
  //   // s = s.replace("data:application/vnd.ms-word;charset=utf-8,", "");
  //   //clean up string by unencoding the %xx
  //   await fs.writeFile("../abc.doc", s); 
  // });
  const page = await browser.newPage();
  await page.goto(`file://${path.resolve(__dirname, '../template/template.html')}`)
  await page.pdf({ path: 'hn.pdf', format: 'a4' });
  const html = await page.content()

  
  await browser.close();

  await fs.writeFile(path.resolve(__dirname, '../output.doc'), html, 'utf8' );

  const fileBuffer = await HTMLtoDOCX(html, null, {
      // table: { row: { cantSplit: true } },
      footer: true,
      header: false,
      pageNumber: false,
    },`<p>footer 来自于宇宙最大的转型企业</p>`);

    // const fileBuffer = await HTMLtoDOCX(htmlString, `<h1>Head！！！</h1>`, {
    //   table: { row: { cantSplit: true } },
    //   footer: true,
    //   header: false,
    //   pageNumber: true,
    // });

    // var options = { format: 'Letter' };

    // pdf.create(htmlString, options).toFile('./2.pdf', function(err, res) {
    //   if (err) return console.log(err);
    //   console.log(res);
    // });
    
    const filePath = '../1.docx';
    fs.writeFile(path.resolve(__dirname, filePath), fileBuffer, (error) => {
      if (error) {
        console.log('Docx file creation failed');
        return;
      }
      console.log('Docx file created successfully');
    });
  })();