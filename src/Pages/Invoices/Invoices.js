import ClientDetails from '../../Components/Invoices/ClientDetails';
import Footer from '../../Components/Invoices/Footer';
import InvocieTable from '../../Components/Invoices/InvoiceTable';
import './style.css';

import * as React from "react";
import Button from 'react-bootstrap/Button';
import { useReactToPrint } from "react-to-print";


 const FunctionalComponentWithHook = () => {
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Invoice",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);
  return (
    <div>
      <div className='container h-50 p-3 printData'>
        <div ref={componentRef} text={text} >
        <ClientDetails data={{ Fname: "Client Name", email: "example@gmail.com", mobileNum: "+972-000-0000", address: "Nablus, Rafydia St", total: 1466.99 }} />
        <InvocieTable />
        <Footer data={{ total: "520", tax: "154" ,}} />
        </div>
        {loading && <p className="indicator">Loading ...</p>}
        <Button variant="btn col-1 btn-outline-primary" onClick={handlePrint} >
        Print
        </Button>
      </div>
    </div>
  );
};

export default FunctionalComponentWithHook;

