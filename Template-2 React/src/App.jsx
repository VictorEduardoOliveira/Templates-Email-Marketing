import React from 'react';

export default function App() {
    return (
        <table
            style={{
                width: '600px',
                border: '1px solid black',
                margin: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontFamily: "Arial, Helvetica, sans-serif",
            }}>
            <tr style={{ backgroundColor: "#0099ef", borderRadius: "10px", width: "100%" }}>
                <th>
                    <img
                        src="images.png"
                        alt="ShopHub Logo"
                        width="40%"
                        style={{ display: "block", margin: "0", padding: "0" }}
                    />
                </th>
            </tr>
            <tr>
                <td style={{ textAlign: "center", padding: "20px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", margin: "auto", borderRadius: "10px", padding: "20px", cellSpacing: "0", cellPadding: "0" }}>
                        <tr>
                            <td>
                                <span style={{ fontSize: "18px", fontWeight: "bold" }}>Você comprou 1 produto</span>
                            </td>
                            <td rowSpan="2">
                                <img src="unnamed.png" alt="Product Image" width="100px" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style={{ fontSize: "24px", fontWeight: "bold" }}>Chegará Amanhã</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style={{ textAlign: "center", padding: "20px" }}>
                    <table style={{ width: "90%", borderCollapse: "collapse", margin: "auto", border: "1px solid #030303", borderRadius: "10px" }}>
                        <div style={{ padding: "20px" }}>
                            <tr>
                                <td style={{ textAlign: "left", padding: "10px" }}>
                                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>Resumo da sua Compra</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", padding: "10px" }}>
                                    <img src="casinha.png" alt="Product Icon" width="30px" style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                    <span style={{ fontSize: "16px" }}>Você comprou de
                                        <strong> ShopHub</strong>
                                    </span>
                                    <br />
                                    <span style={{ fontSize: "16px", marginLeft: "40px" }}>CNPJ: 00.000.000/0000-00</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "left", padding: "10px" }}>
                                    <img src="carrinho.png" alt="Product Icon" width="30px" style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                    <span style={{ fontSize: "16px" }}>Envio no Endereço:</span>
                                    <br />
                                    <div style={{ marginLeft: "40px" }}>
                                        <span style={{ fontSize: "16px" }}>Rua Exemplo, 123 - Bairro, São Paulo/SP - CEP 00000-000</span>
                                    </div>
                                    <div style={{ marginLeft: "40px", paddingBottom: "20px" }}>
                                        <span style={{ fontSize: "16px" }}>Nome Exemplo - Telefone: (11) 0000-0000</span>
                                    </div>
                                    <a href="#" style={{ fontSize: "16px", border: "1px solid #0099ef", backgroundColor: "#0099ef", textDecoration: "none", padding: "10px", color: "white", borderRadius: "8px" }}>Alterar Endereço</a>
                                </td>
                            </tr>
                        </div>
                    </table>
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
        </table>
    );
}