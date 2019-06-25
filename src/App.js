import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

function App() {
  const users = [
    {
      id: '00001',
      type: "VIP",
      bill: '0',  
      patient_name: "Alim Tegar",
      doctor_name: "John Doe",
      room_name: "Kamar Perawatan",
      created_at: '01/07/2000 00:00:00'
    },
    {
      id: '00003',
      type: "VVIP",
      bill: '10.000',  
      patient_name: "Alim Tegar",
      doctor_name: "John Doe",
      room_name: "Kamar Perawatan",
      created_at: '01/07/2000 00:00:00'
    },
    {
      id: '00004',
      type: "VVIP",
      bill: '1.000.000.000',  
      patient_name: "Abdul Aziz Wicaksono",
      doctor_name: "John Doe",
      room_name: "Kamar Perawatan",
      created_at: '01/07/2000 00:00:00'
    },
    {
      id: '00005',
      type: "VVIP",
      bill: '0',  
      patient_name: "Samiyem",
      doctor_name: "John Doe",
      room_name: "Kamar Perawatan",
      created_at: '01/07/2000 00:00:00'
    }
    ];

  const getCellWidth = (property) => {
    switch (property) {
      case 'id': 
        return 14;
      case 'type': 
        return 19;
      case 'bill': 
        return 29;
      default:
        return 32;
    }
  };

  useEffect(() => {
    console.log(Object.keys(users[0]));
  }, []);

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

    Object.keys(users[0]).map((property) => {
      doc.setFontType('bold');

      const width = getCellWidth(property);

      doc.cell(10, 10, width, 8, property, 1);
    });

    users.map((user, key) => {
      Object.keys(user).map((property) => {
        doc.setFontType('normal');

        const text = user[property].toString();
        const width = getCellWidth(property);

        doc.cell(10, 10, width, 8, text, key + 2);
      })
    });
    

    doc.output('dataurlnewwindow');
  };

  return (
    <div className="App">
      <button onClick={() => downloadPdf()}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
