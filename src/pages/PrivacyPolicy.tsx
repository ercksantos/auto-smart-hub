import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Voltar para o site
                            </a>
                        </Button>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" asChild>
                                <a href="/termos-de-uso">Termos</a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href="/lgpd">LGPD</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container-custom py-12 max-w-4xl">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-2">Política de Privacidade</h1>
                    <p className="text-muted-foreground mb-8">Última atualização: 14 de janeiro de 2026</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. INTRODUÇÃO</h2>
                        <p className="text-muted-foreground">
                            A Concessionária Inteligente ("nós", "nosso") está comprometida com a proteção da privacidade e dos
                            dados pessoais de nossos clientes e dos usuários finais que interagem com o sistema. Esta Política de
                            Privacidade descreve como coletamos, usamos, armazenamos e protegemos informações pessoais em conformidade
                            com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. DEFINIÇÕES</h2>
                        <p className="text-muted-foreground mb-4">Para efeitos desta política:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural identificada ou identificável</li>
                            <li><strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais</li>
                            <li><strong>Controlador:</strong> nosso cliente (concessionária) que determina as finalidades do tratamento de dados</li>
                            <li><strong>Operador:</strong> a Concessionária Inteligente, que trata dados pessoais em nome do Controlador</li>
                            <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais (coleta, armazenamento, uso, etc.)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. PAPÉIS E RESPONSABILIDADES</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>3.1. A Concessionária Inteligente atua como OPERADOR</strong> de dados pessoais, processando
                            informações em nome e conforme instruções de nossos clientes.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">3.2. Nossos Clientes (concessionárias) atuam como CONTROLADORES</h3>
                        <p className="text-muted-foreground mb-2">Sendo responsáveis por:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Obter consentimento dos titulares quando necessário</li>
                            <li>Definir finalidades do tratamento de dados</li>
                            <li>Informar titulares sobre coleta e uso de dados</li>
                            <li>Atender solicitações dos titulares (acesso, correção, exclusão)</li>
                            <li>Garantir base legal para tratamento</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.3. Nossa Responsabilidade como Operador:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Processar dados apenas conforme instruções do Controlador</li>
                            <li>Implementar medidas de segurança adequadas</li>
                            <li>Auxiliar o Controlador no cumprimento de obrigações</li>
                            <li>Notificar o Controlador sobre incidentes de segurança</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. DADOS QUE COLETAMOS</h2>

                        <h3 className="text-xl font-semibold mb-3">4.1. Dados do Cliente (Concessionária)</h3>
                        <p className="text-muted-foreground mb-2">Quando você contrata nosso sistema, coletamos:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Dados cadastrais:</strong> razão social, CNPJ, endereço, telefone, e-mail</li>
                            <li><strong>Dados de contato:</strong> nome de responsáveis, cargos, telefones, e-mails</li>
                            <li><strong>Dados de pagamento:</strong> informações bancárias para faturamento</li>
                            <li><strong>Dados de uso:</strong> logs de acesso, utilização do sistema, interações</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">4.2. Dados de Usuários Finais (Clientes das Concessionárias)</h3>
                        <p className="text-muted-foreground mb-2">O sistema processa, em nome do Controlador:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Dados de identificação:</strong> nome, CPF, RG, CNH</li>
                            <li><strong>Dados de contato:</strong> telefone, WhatsApp, e-mail, endereço</li>
                            <li><strong>Dados financeiros:</strong> renda, informações para simulação de financiamento</li>
                            <li><strong>Dados de interação:</strong> histórico de conversas, preferências de veículos</li>
                            <li><strong>Dados profissionais:</strong> ocupação, empregador (quando fornecidos)</li>
                            <li><strong>Documentos:</strong> imagens de documentos enviados para análise de crédito</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. COMO COLETAMOS OS DADOS</h2>

                        <h3 className="text-xl font-semibold mb-3">5.1. Coleta Direta:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Formulários de contratação do sistema</li>
                            <li>Cadastro de usuários no sistema</li>
                            <li>Conversas via WhatsApp com chatbot</li>
                            <li>Upload de documentos pelos clientes finais</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.2. Coleta Automática:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Logs de acesso e uso do sistema</li>
                            <li>Cookies e tecnologias similares (apenas em áreas administrativas)</li>
                            <li>Metadados de conversas e interações</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.3. Coleta de Terceiros:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>APIs de financiamento (mediante consentimento)</li>
                            <li>Integração com WhatsApp Business</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. FINALIDADES DO TRATAMENTO</h2>
                        <p className="text-muted-foreground mb-4">Tratamos dados pessoais para as seguintes finalidades:</p>

                        <h3 className="text-xl font-semibold mb-3">6.1. Para Nossos Clientes (Concessionárias):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Prestação do serviço contratado</li>
                            <li>Gerenciamento de contas e acessos</li>
                            <li>Faturamento e cobrança</li>
                            <li>Suporte técnico</li>
                            <li>Comunicações sobre o sistema</li>
                            <li>Melhorias e desenvolvimento de funcionalidades</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">6.2. Para Usuários Finais (em nome do Controlador):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Atendimento automatizado via chatbot</li>
                            <li>Gestão de leads e oportunidades</li>
                            <li>Simulação de financiamento</li>
                            <li>Envio de informações sobre veículos</li>
                            <li>Análise de interesse e preferências</li>
                            <li>Histórico de atendimento</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. BASE LEGAL PARA TRATAMENTO</h2>
                        <p className="text-muted-foreground mb-4">O tratamento de dados é realizado com base em:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Execução de contrato:</strong> para prestação do serviço contratado</li>
                            <li><strong>Consentimento:</strong> quando solicitado ao titular</li>
                            <li><strong>Legítimo interesse:</strong> para melhorias do sistema e segurança</li>
                            <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei</li>
                            <li><strong>Exercício regular de direitos:</strong> para defesa em processos</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. COMPARTILHAMENTO DE DADOS</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>8.1. Não vendemos nem alugamos dados pessoais.</strong>
                        </p>

                        <h3 className="text-xl font-semibold mb-3">8.2. Podemos compartilhar dados com:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Fornecedores de Infraestrutura:</strong> provedores de hospedagem e nuvem</li>
                            <li><strong>APIs de Terceiros:</strong> serviços de financiamento (mediante consentimento)</li>
                            <li><strong>WhatsApp/Meta:</strong> para funcionamento do chatbot</li>
                            <li><strong>Processadores de Pagamento:</strong> para cobrança das mensalidades</li>
                            <li><strong>Autoridades:</strong> quando exigido por lei ou ordem judicial</li>
                        </ul>

                        <p className="text-muted-foreground">
                            8.3. Todos os terceiros são contratualmente obrigados a proteger os dados e usá-los apenas para
                            finalidades especificadas.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. ARMAZENAMENTO E RETENÇÃO</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>9.1. Localização:</strong> Dados são armazenados em servidores seguros em nuvem, com redundância.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">9.2. Período de Retenção:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Dados de clientes ativos:</strong> durante vigência do contrato</li>
                            <li><strong>Dados após cancelamento:</strong> 30 dias para exportação + 90 dias em backup de segurança</li>
                            <li><strong>Dados fiscais/contratuais:</strong> 5 anos (conforme legislação tributária)</li>
                            <li><strong>Dados de usuários finais:</strong> conforme instruções do Controlador e requisitos legais</li>
                        </ul>

                        <p className="text-muted-foreground">
                            9.3. Após período de retenção, dados são permanentemente excluídos.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. SEGURANÇA DOS DADOS</h2>
                        <p className="text-muted-foreground mb-4">Implementamos medidas técnicas e organizacionais para proteção:</p>

                        <h3 className="text-xl font-semibold mb-3">10.1. Medidas Técnicas:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Criptografia de dados sensíveis (em repouso e em trânsito)</li>
                            <li>Certificados SSL/TLS</li>
                            <li>Firewall e proteção contra invasões</li>
                            <li>Controle de acesso baseado em funções</li>
                            <li>Autenticação segura (senhas hash, 2FA opcional)</li>
                            <li>Backup diário automatizado</li>
                            <li>Logs de auditoria</li>
                            <li>Monitoramento de segurança 24/7</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">10.2. Medidas Organizacionais:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Política de segurança da informação</li>
                            <li>Treinamento de equipe em proteção de dados</li>
                            <li>Acordos de confidencialidade</li>
                            <li>Controle de acesso físico e lógico</li>
                            <li>Processos de resposta a incidentes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">11. DIREITOS DOS TITULARES</h2>
                        <p className="text-muted-foreground mb-4">Conforme a LGPD, os titulares têm direito a:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los</li>
                            <li><strong>Correção:</strong> corrigir dados incompletos ou desatualizados</li>
                            <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários ou excessivos</li>
                            <li><strong>Portabilidade:</strong> receber dados em formato estruturado</li>
                            <li><strong>Eliminação:</strong> de dados tratados com consentimento</li>
                            <li><strong>Informação:</strong> sobre compartilhamento com terceiros</li>
                            <li><strong>Revogação de consentimento:</strong> quando aplicável</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">11.1. Como Exercer Direitos:</h3>
                        <p className="text-muted-foreground mb-2"><strong>Para dados de clientes (concessionárias):</strong></p>
                        <p className="text-muted-foreground mb-4">Entre em contato conosco através dos canais indicados na seção 15.</p>

                        <p className="text-muted-foreground mb-2"><strong>Para dados de usuários finais:</strong></p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Entre em contato com a concessionária (Controlador)</li>
                            <li>A concessionária solicitará nossa assistência quando necessário</li>
                        </ul>

                        <p className="text-muted-foreground">
                            <strong>11.2. Prazo de Atendimento:</strong> Até 15 dias para resposta, podendo ser prorrogado por
                            mais 15 dias mediante justificativa.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">12. COOKIES E TECNOLOGIAS SIMILARES</h2>

                        <h3 className="text-xl font-semibold mb-3">12.1. Utilizamos cookies apenas em áreas administrativas para:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Manter sessão do usuário logado</li>
                            <li>Lembrar preferências de configuração</li>
                            <li>Análise de uso do sistema</li>
                        </ul>

                        <p className="text-muted-foreground mb-4">
                            12.2. Não utilizamos cookies de rastreamento ou publicidade.
                        </p>

                        <p className="text-muted-foreground">
                            12.3. Você pode desabilitar cookies nas configurações do navegador, mas isso pode afetar funcionalidades.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">13. INCIDENTES DE SEGURANÇA</h2>

                        <h3 className="text-xl font-semibold mb-3">13.1. Em caso de incidente de segurança que possa acarretar risco aos titulares:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Notificaremos nosso cliente (Controlador) em até 24 horas</li>
                            <li>Auxiliaremos na comunicação à ANPD, se necessário</li>
                            <li>Implementaremos medidas para mitigar danos</li>
                            <li>Investigaremos causas e adotaremos ações corretivas</li>
                        </ul>

                        <p className="text-muted-foreground">
                            13.2. O Controlador é responsável por comunicar titulares afetados.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">14. ALTERAÇÕES NESTA POLÍTICA</h2>

                        <p className="text-muted-foreground mb-4">
                            14.1. Podemos atualizar esta Política periodicamente.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">14.2. Alterações significativas serão comunicadas via:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>E-mail para clientes</li>
                            <li>Aviso no sistema</li>
                            <li>Publicação no site</li>
                        </ul>

                        <p className="text-muted-foreground">
                            14.3. Uso continuado após mudanças constitui aceitação.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">15. CONTATO</h2>

                        <p className="text-muted-foreground mb-2">Para questões sobre privacidade e proteção de dados:</p>
                        <ul className="list-none space-y-2 text-muted-foreground">
                            <li><strong>E-mail:</strong> erickai.contato@gmail.com</li>
                            <li><strong>WhatsApp:</strong> (53) 99163-1843</li>
                            <li><strong>Endereço:</strong> Pelotas, RS - Brasil</li>
                        </ul>
                    </section>

                    <div className="mt-12 p-6 glass-card rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
                            e demais normas aplicáveis sobre proteção de dados pessoais no Brasil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
