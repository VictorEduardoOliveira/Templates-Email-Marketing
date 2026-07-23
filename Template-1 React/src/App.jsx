import React from "react";

export default function App() {
  return (
    <table
      style={{
        width: "600px",
        border: "1px solid black",
        padding: "20px",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <tbody>
        {/* Logo */}
        <tr>
          <td>
            <img
              src="images.png"
              alt="ShopHub Logo"
              width="35%"
              style={{ display: "block", margin: "0 auto" }}
            />
          </td>
        </tr>
        {/* Produto Principal */}
        <tr>
          <td>
            <p style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
              🔥 Novo Notebook Gamer RTX 5070
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="images.jfif"
              alt="Notebook Gamer RTX 5070"
              width="75%"
              style={{ display: "block", margin: "0 auto" }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <div style={{ textAlign: "center", fontSize: "20px", margin: "10px auto" }}>
              <p style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>
                Até 15% de desconto nesta semana
              </p>
              <div>
                <span>De </span>
                <span style={{ fontSize: "40px", fontWeight: "bold", color: "#00A650" }}>
                  <del>R$ 9.999,00</del>
                </span>
              </div>
              <div style={{ margin: "10px auto" }}>
                <span>Por Apenas</span>
              </div>
              <div>
                <span style={{ fontSize: "40px", fontWeight: "bold", color: "#00A650" }}>
                  R$ 8.499,00
                </span>
              </div>
              <div>
                <span style={{ fontSize: "20px", fontWeight: "bold", color: "#00A650" }}>
                  ou 12x de R$ 708,25 sem juros
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <a
              href="#"
              style={{
                display: "inline-block",
                width: "200px",
                margin: "20px auto",
                padding: "18px 35px",
                background: "#3483FA",
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "22px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Comprar Agora
            </a>
          </td>
        </tr>
        {/* Especificações do Produto */}
        <tr>
          <td>
            <p style={{ textAlign: "center", fontSize: "30px" }}>
              <strong>Especificações</strong>
            </p>
            <ul style={{ fontSize: "20px", listStyleType: "none", padding: 0, textAlign: "left" }}>
              <li>✅ Intel Core Ultra 7</li>
              <li>✅ RTX 5070</li>
              <li>✅ 32 GB RAM</li>
              <li>✅ SSD 1 TB</li>
            </ul>
          </td>
        </tr>

        <tr><td style={{ borderTop: "1px solid #000" }} /></tr>
        {/* Outras Sugestões de Produtos */}
        <tr>
          <td>
            <p style={{ textAlign: "center", fontSize: "30px" }}>
              <strong>Outros produtos</strong>
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {[
                    ["PC.webp","Notebook Gamer RTX 3050"],
                    ["PC2.webp","Notebook Gamer RTX 4050"],
                    ["PC3.webp","Notebook Gamer RTX 4070"],
                  ].map(([img,name])=>(
                    <td key={name} style={{width:"33.33%",textAlign:"center",padding:"10px"}}>
                      <img src={img} alt={name} width="100%" />
                      <p><a href="#">{name}</a></p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        {/* Rodapé do E-mail */}
        <tr>
          <td
            align="center"
            style={{
              backgroundColor:"#F5F5F5",
              padding:"40px 30px",
              fontSize:"13px",
              color:"#666"
            }}
          >
            <img src="images.png" alt="ShopHub" width="20%" style={{display:"block",margin:"0 auto 20px"}}/>

            <p>Você recebeu este e-mail porque possui uma conta na <strong>ShopHub</strong>.</p>

            <table style={{margin:"0 auto 20px"}}>
              <tbody>
                <tr>
                  {["Minha Conta","Meus Pedidos","Central de Ajuda","Contato"].map(item=>(
                    <td key={item} style={{padding:"0 12px"}}>
                      <a href="#" style={{color:"#3483FA",textDecoration:"none"}}>{item}</a>
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

            <table width="100%"><tbody><tr><td style={{borderTop:"1px solid #DDD"}}/></tr></tbody></table>
            
                {/* Endereço da empresa */}
            <p>
              ShopHub Comércio Digital Ltda.<br/>
              Av. Exemplo, 1234 - São Paulo/SP<br/>
              CEP 00000-000
            </p>

            <p style={{fontSize:"12px",color:"#999"}}>
              Não deseja mais receber nossas ofertas?{" "}
              <a href="#" style={{color:"#3483FA"}}>Cancelar inscrição</a>
            </p>

            <p style={{fontSize:"12px",color:"#999"}}>
              © 2026 ShopHub. Todos os direitos reservados.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
