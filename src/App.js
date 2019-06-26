import React from 'react';
import jsPDF from 'jspdf';

function App() {
  const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      id: 2,
      title: "quis ut nam facilis",
      completed: false
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true
    },
    {
      id: 5,
      title: "laboriosam mollitia et",
      completed: false
    },
    {
      id: 6,
      title: "qui ullam ratione",
      completed: false
    },
    {
      id: 7,
      title: "illo expedita consequatur",
      completed: false
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true
    },
    {
      id: 9,
      title: "molestiae perspiciatis",
      completed: false
    },
    {
      id: 10,
      title: "illo est ratione",
      completed: true
    },
  ];

  const x = 10;
  const y = 10;
  let width = 48;

  const downloadPdf = () => {
    let doc  = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      fontSize: 8,
      lineHeight: 0.6,
      autoSize: false,
      printHeaders: true
    });

    Object.keys(todos[0]).map((property) => {
      doc.setFontType('bold');

      doc.cell(x, y, width, 8, property, 1);

      return false;
    });

    todos.map((todo, key) => {
      Object.keys(todo).map((property) => {
        doc.setFontType('normal');

        doc.cell(x, y, width, 8, todo[property].toString(), key + 2);

        return false;
      });

      return false;
    });
    

    doc.output('dataurlnewwindow');
  };

  return (
    <div className="App">
      <button onClick={() => downloadPdf()}>
        Download todos.pdf
      </button>
    </div>
  );
}

export default App;
