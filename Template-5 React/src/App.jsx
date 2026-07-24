import React from 'react';

export default function App() {
  return (
    <table
      style={{
        width: '800px',
        border: '1px solid #797979',
        margin: '10px auto',
        boxShadow: '0 4px 8px rgba(117, 117, 117, 0.41)',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}>
      <tbody>
        <tr>
          <td>
            <img src='logo.png' width='20%' style={{ marginTop: '10px' }} />
            <p style={{ fontWeight: 'bold', margin: '0 15%', fontSize: '32px', lineHeight: '1.3' }}>Você acaba de pagar R$57,99 para ShopHub Inc</p>
            <a style={{ fontWeight: 'bold', backgroundColor: '#000000', color: '#fff', textDecoration: 'none', borderRadius: '20px', padding: '10px 20px', display: 'block', margin: '20px 32%' }}>Visualizar a Transação</a>
          </td>
        </tr>
        <tr>
          <td>
            <table align='center' style={{ backgroundColor: '#fff', margin: '0 auto 30px', borderRadius: '20px', padding:'40px 20px', width:'600px'}}>
              <tr>
                <td align='left' style={{}}>
                  <p><strong>ID da Transação</strong></p>
                  <a href='#' style={{color:'#007BFF'}}>0000000000000000</a>
                </td>
                <td align='left' style={{}}>
                  <p><strong>Data da Transação</strong></p>
                  <p>1 de Janeiro de 2001</p>
                </td>
              </tr>
              <tr>
                <td align='left' style={{paddingTop: '20px'}}>
                  <p><strong>Vendedor</strong></p>
                  <p>ShopHub Inc</p>
                  <a href='#' style={{color:'#007BFF', display: 'block'}}>cobrancas@ShopHub.com</a>
                  <p>+55 (11) 55555-5555</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align='right' style={{paddingRight:'12%'}}>
            <table style={{marginBottom: '10px'}} >
              <tr>
                <td align='right'><strong>
                  <p>Subtotal</p>
                  <p>Total</p>
                  <p>Payment</p>
                  </strong>
                </td>
                <td align='right' style={{paddingLeft: '50px'}}>
                  <p>R$57,99</p>
                  <p>R$57,99</p>
                  <p>R$57,99</p>
                </td>
              </tr>
            </table>
            <p>Pagamento enviado para <a href='#' style={{color:'#007BFF'}}>cobrancas@ShopHub.com</a></p>
          </td>
        </tr>
        <tr>
          <td> <table width="80%" style={{margin: '30px auto'}}><tr><td style={{ borderTop: "3px solid #00000023" }} /></tr></table> </td>
        </tr>
        <tr>
          <td>
            <a style={{ fontWeight: 'bold', backgroundColor: '#000000', color: '#fff', textDecoration: 'none', borderRadius: '20px', padding: '10px 20px', display: 'block', margin: '20px 32%' }}>Visualizar a Transação</a>
          </td>
        </tr>
        <tr>
          <td align='left' style={{paddingLeft:'12%', fontSize: '15px', paddingBottom:'40px'}}>
            <p style={{fontWeight: 'bold'}}>Problemas com essa transação?</p>
            <p>Você tem 180 dias a partir da data da transação para recorrer.</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src='logo.png' width='20%' />
            <table width="80%" style={{margin: '30px auto'}}><tr><td style={{ borderTop: "3px solid #00000023" }} /></tr></table>
          </td>
        </tr>
        <tr>
          <td>
            <table style={{ margin: "0 auto 20px" }}>
              <tbody>
                <tr>
                  {["Minha Conta", "Meus Pedidos", "Central de Ajuda", "Contato"].map(item => (
                    <td key={item} style={{ padding: "0 12px" }}>
                      <a href="#" style={{ color: "#3483FA", textDecoration: "none" }}>{item}</a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}