import React from 'react';

export default function App() {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: '800px',
        border: '1px solid #747474',
        margin: '10px auto',
        boxShadow: '0 4px 8px rgba(184, 184, 184, 0.41)',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'white'
      }}>
      <tbody>
        <tr>
          {/* Cabeçalho */}
          <td>
            <img src="logo.png" alt="Logo" style={{ width: '10%', margin: '20px auto 20px', display: 'block' }} />
            <h1 style={{
              fontSize: "20px",
              fontWeight: "bold",
              background: "linear-gradient(120deg, #7AE7FF, #005CFF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              Air Pods Pro 2
            </h1>
            <p style={{
              fontSize: "26px",
              paddingBottom: "20px",
              margin: "0 auto"
            }}><strong>A melhor experiência auditiva.</strong></p>
          </td>
        </tr>
        {/* Introdução do Produto  */}
        <tr>
          <td>
            <p style={{ fontSize: "18px", margin: "0 15%", color: '#d2d2d2' }}>Acesse um teste auditivo,¹ um assistente auditivo,¹ e ative proteção auditiva² - Já disponível nos AirPods mais avançados da NEXA com uma atualização de software gratuita</p>
            <p style={{ fontSize: "14px", margin: "10px auto", color: '#797979' }}>R$799,00</p>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <a href="#" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '20px' }}>Comprar</a>
              <a href="#" style={{ padding: '10px 20px', border: '2px solid #007BFF', color: '#007BFF', textDecoration: 'none', borderRadius: '20px', marginLeft: '20px' }}>Saiba mais</a>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img src="fone.png" alt="Fone" style={{ margin: '90px auto', width: '80%' }} />
          </td>
        </tr>
        <tr>
          {/* Comparação de modelos */}
          <td>
            <div style={{ backgroundColor: '#2c2c2c85', borderRadius: '20px', padding: '65px 10px', margin: '0 7%', }}>
              <p style={{ paddingBottom: '10px', fontWeight: 'bold' }}>Qual AirPod é o certo para você?</p>
              <p style={{ marginTop: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#007BFF' }} >Compare todos os Modelos de AirPods &gt; </a></p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <table align='center' style={{ marginTop: '20px', /*border: '3px solid #fff',*/ width: '88%' }}>
              <tr style={{ marginTop: '50px' }}>

                {/* Personalização */}

                <td style={{ padding: '0 1%', width: '50%' }}>
                  <div style={{ backgroundColor: '#2c2c2c85', borderRadius: '20px', padding: '10% 0 0', marginRight: '5px', fontSize: '20px', width: '100%' }}>
                    <p style={{ margin: '0 10px', fontWeight: 'bold' }}>Personalize do seu próprio jeito. Grave um desenho nos seus AirPods de graça. Só na Nexa.</p>
                    <a href='#' style={{ textDecoration: 'none', fontSize: '16px', color: '#007BFF' }}>Saiba mais &gt;</a> <br />
                    <img src='airpods.png' width='70%' />
                  </div>
                </td>

                {/* CashBack */}

                <td style={{ padding: '0 1%', width: '50%' }}>
                  <div style={{ backgroundColor: '#2c2c2c85', marginLeft: '5px', borderRadius: '20px', padding: '10% 0 0', fontSize: '20px', width: '100%' }}>
                    <p style={{ fontWeight: 'bold' }}>Ganhe 3% do seu dinheiro de volta com o cartão Nexa </p>
                    <a href='#' style={{ textDecoration: 'none', fontSize: '16px', marginBottom: '40px', display: 'block', color: '#007BFF' }}>Saiba mais &gt;</a>
                    <img src='celular.PNG' width='65%' align='center' />
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

            {/* Nexa Music */}

        <div style={{ backgroundColor: '#2c2c2c85', borderRadius: '20px', padding: '50px 10px', margin: '0 7%', marginTop: '20px' }}>
          <tr >
            <td valign='top'>
              <img src='logo_music.png' width='15%' align='left' style={{ display: 'block', marginLeft: '30px' }} />
              <p align='left' style={{ marginTop: '50px', fontSize: '20px', marginLeft: '30px', fontWeight: 'bold' }}>Ganhe 3 meses de Nexa Music grátis com seus AirPods Pro 2.</p>
              <a href='#' align='left' style={{ textDecoration: 'none', fontSize: '16px', display: 'block', marginLeft: '30px', marginTop: '20px', color: '#007BFF' }}>Saiba mais &gt;</a>
            </td>
            <td style={{ paddingRight: '10px' }}>
              <img src='album.png' width='100%' />
            </td>
          </tr>
        </div>
            
            {/* Maneiras de Compra */}

        <div style={{ backgroundColor: '#2c2c2c85', borderRadius: '20px', padding: '50px 10px', margin: '0 7%', marginTop: '20px', marginBottom: '30px'}}>
          <tr>
            <td>
              <p style={{ fontSize: '20px', margin: '0 15%', fontWeight: 'bold' }}>Quando você compra da Nexa, estamos presentes em cada etapa do processo.</p>
              <p style={{ fontSize: '16px', margin: '0 18%', color: '#d2d2d2' }}>Seja comprando online ou pessoalmente, estamos aqui para responder suas perguntas, ajudar você a encontrar os AirPods certos e orienta-lo durante a configuração.</p>
              <a href='#' style={{ textDecoration: 'none', fontSize: '16px', color: '#007BFF' }} >Comprar online &gt;</a>
              <a href='#' style={{ textDecoration: 'none', fontSize: '16px', color: '#007BFF', marginLeft: '20px' }} >Encontre uma loja &gt;</a> <br />
              <table style={{ marginTop: '20px' }}>
                <tr>
                  <td>
                    <img src='caminhao.png' width='25%' align='left' style={{ display: 'block', marginLeft: '80px', marginTop: '10px' }} /><br />
                    <p style={{ margin: '20px 10px 0', }}>Rápido, entrega grátis</p>
                  </td>
                  <td>
                    <img src='sacola.png' width='25%' align='left' style={{ display: 'block', marginLeft: '70px' }} /><br />
                    <p style={{ margin: '30px auto 0' }}>Compre online e retire na loja</p>
                  </td>
                  <td rowSpan={2}>
                    <img src='balao_de_fala.png' width='20%' align='left' style={{ display: 'block', marginLeft: '100px', marginTop: '20px' }} /><br />
                    <p style={{ margin: '55px 15px 0' }}>Experiencie os AirPods pessoalmente em uma Nexa Store</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </div>
        {/* Rodapé do E-mail */}
        <tr>
          <td
            align="center"
            style={{
              backgroundColor: '#2c2c2c85',
              padding: "40px 30px",
              fontSize: "13px",
              color: "#666",
            }}
          >
            <img src="logo.png" alt="Nexa" width="10%" style={{ display: "block", margin: "0 auto 20px" }} />

            <p>Você recebeu este e-mail porque possui uma conta na <strong>ShopHub</strong>.</p>

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
            {/* Contato */}
            <p>
              <a href="#" style={{textDecoration:'none', color:"#3483FA"}}>📘 Facebook</a>&nbsp;&nbsp;
              <a href="#" style={{textDecoration:'none', color:"#3483FA"}}>📷 Instagram</a>&nbsp;&nbsp;
              <a href="#" style={{textDecoration:'none', color:"#3483FA"}}>▶ YouTube</a>&nbsp;&nbsp;
              <a href="#" style={{textDecoration:'none', color:"#3483FA"}}>💼 LinkedIn</a>
            </p>

            <table width="100%"><tbody><tr><td style={{ borderTop: "1px solid #DDD" }} /></tr></tbody></table>

            {/* Endereço da empresa */}
            <p>
              Nexa Comércio Digital Ltda.<br />
              Av. Exemplo, 1234 - São Paulo/SP<br />
              CEP 00000-000
            </p>

            <p style={{ fontSize: "12px", color: "#999" }}>
              Não deseja mais receber nossas ofertas?{" "}
              <a href="#" style={{ color: "#3483FA" }}>Cancelar inscrição</a>
            </p>

            <p style={{ fontSize: "12px", color: "#999" }}>
              © 2026 Nexa. Todos os direitos reservados.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}