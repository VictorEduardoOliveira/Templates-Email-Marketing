import React from 'react';

export default function App() {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        color: 'black',
        width: '600px',
        border: '1px solid black',
        padding: '20px',
        margin: '0 auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}>
      <tbody>
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <img src="images.png" alt="Logo" style={{ width: '60%', margin: '0 auto 20px', display: 'block' }} />
              <hr style={{ border: '1px solid blue', margin: '20px 0' }} />
              <h1 style={{ margin: 'auto', fontSize: '24px', color: '#333' }}>
                Bem-vindo(a) à <strong>ShopHub</strong>! Tudo o que você precisa, a um clique de distância </h1>
              <p style={{ margin: '20px 0', fontSize: '16px', color: '#555' }}>
                Notei que acabou de se cadastrar em nossa plataforma. Estamos muito felizes em tê-lo conosco!​🎉​</p>
              <p style={{ margin: '20px 0', fontSize: '16px', color: '#555' }}>Para comemorar a sua chegada, preparamos um presente especial para a sua primeira compra:</p>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <div style={{ margin: '20px 0', fontSize: '18px' }}>
                <p>⭐<strong> [15]% DE DESCONTO</strong>⭐</p>
                <p>Use o cupom: BEMVINDO15</p>
                <a href="#" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '5px', marginTop: '10px', fontWeight: 'bold' }}>QUERO USAR MEU CUPOM</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ borderTop: "1px solid #535353" }}></td>
          </tr>
          <tr>
            <td style={{ padding: '40px' }}>
              <p style={{ margin: '20px 0', fontSize: '18px', color: 'black', textAlign: 'center' }}>
                O que você está procurando hoje? Explore nossas categorias:
              </p>
              <ul style={{ marginLeft: '0', fontSize: '16px', textAlign: 'left', listStyle: 'none' }}>
                <li><a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>📱 Eletrônicos & Tecnologia</a></li>
                <li><a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>🏡​ Casa & Decoração</a></li>
                <li><a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>👠​ Moda & Acessórios</a></li>
                <li><a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>🔥​ Ofertas do Dia</a></li>
              </ul>
              <p style={{ margin: '20px 0', fontSize: '16px', textAlign: 'center' }}>Se precisar de ajuda com a sua primeira compra ou tiver qualquer dúvida sobre entrega, nossa equipe de suporte está disponível 24 horas por dia através da nossa Central de Atendimento.</p>
              <span style={{ textAlign: 'center', marginTop: '20px' }}>Boas Compras!</span><br />
              <span style={{ fontSize: "13px", color: "#666" }}>Equipe ShopHub</span>
            </td>
          </tr>
          {/* Rodapé do E-mail */}
          <tr>
            <td
              align="center"
              style={{
                backgroundColor: "#F5F5F5",
                padding: "40px 30px",
                fontSize: "13px",
                color: "#666"
              }}
            >
              <img src="images.png" alt="ShopHub" width="35%" style={{ display: "block", margin: "0 auto 20px" }} />

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
                <a href="#">📘 Facebook</a>&nbsp;&nbsp;
                <a href="#">📷 Instagram</a>&nbsp;&nbsp;
                <a href="#">▶ YouTube</a>&nbsp;&nbsp;
                <a href="#">💼 LinkedIn</a>
              </p>

              <table width="100%"><tbody><tr><td style={{ borderTop: "1px solid #DDD" }} /></tr></tbody></table>

              {/* Endereço da empresa */}
              <p>
                ShopHub Comércio Digital Ltda.<br />
                Av. Exemplo, 1234 - São Paulo/SP<br />
                CEP 00000-000
              </p>

              <p style={{ fontSize: "12px", color: "#999" }}>
                Não deseja mais receber nossas ofertas?{" "}
                <a href="#" style={{ color: "#3483FA" }}>Cancelar inscrição</a>
              </p>

              <p style={{ fontSize: "12px", color: "#999" }}>
                © 2026 ShopHub. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </div>
      </tbody>
    </table>
  )
}