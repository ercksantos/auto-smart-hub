import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
                                <a href="/politica-de-privacidade">Privacidade</a>
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
                    <h1 className="text-4xl font-bold mb-2">Termos de Uso</h1>
                    <p className="text-muted-foreground mb-8">Última atualização: 14 de janeiro de 2026</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. ACEITAÇÃO DOS TERMOS</h2>
                        <p className="text-muted-foreground mb-4">
                            Ao contratar e utilizar a plataforma Concessionária Inteligente ("Sistema", "Plataforma", "Serviço"),
                            você ("Cliente", "Contratante", "Concessionária") concorda em cumprir e estar vinculado aos presentes
                            Termos de Uso. Se você não concorda com qualquer parte destes termos, não deverá contratar ou utilizar
                            nossos serviços.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. DESCRIÇÃO DO SERVIÇO</h2>
                        <p className="text-muted-foreground mb-4">
                            A Concessionária Inteligente é um sistema personalizado de gestão para concessionárias e revendas de
                            veículos, desenvolvido sob encomenda, que oferece:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Sistema de gestão de veículos e estoque</li>
                            <li>Atendimento automatizado via WhatsApp com inteligência artificial</li>
                            <li>Gestão de leads e oportunidades de venda</li>
                            <li>Controle de propostas e negociações</li>
                            <li>Dashboard analítico com métricas de desempenho</li>
                            <li>Armazenamento de dados e imagens de veículos</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. MODELO DE CONTRATAÇÃO</h2>

                        <h3 className="text-xl font-semibold mb-3">3.1. Serviço sob Encomenda</h3>
                        <p className="text-muted-foreground mb-4">
                            Este não é um serviço de assinatura autogerenciável. A contratação requer:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Contato direto com nossa equipe comercial</li>
                            <li>Análise de necessidades específicas do cliente</li>
                            <li>Proposta comercial personalizada</li>
                            <li>Formalização através de Contrato de Prestação de Serviços</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.2. Estrutura de Investimento</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Valor de Implementação:</strong> Cobrança única para configuração, personalização e implantação do sistema</li>
                            <li><strong>Mensalidade de Manutenção:</strong> Valor recorrente para manter o sistema ativo, atualizado e com suporte técnico</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.3. A implementação inclui:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Configuração inicial do sistema</li>
                            <li>Integração com WhatsApp Business</li>
                            <li>Treinamento da equipe</li>
                            <li>Customizações acordadas em proposta</li>
                            <li>Migração de dados (se aplicável)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.4. A mensalidade de manutenção inclui:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Hospedagem e infraestrutura</li>
                            <li>Atualizações de sistema</li>
                            <li>Suporte técnico</li>
                            <li>Backup de dados</li>
                            <li>Monitoramento e segurança</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. PROCESSO DE CONTRATAÇÃO</h2>

                        <h3 className="text-xl font-semibold mb-3">4.1. Para contratar o serviço, é necessário:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Solicitar demonstração através do site ou contato direto</li>
                            <li>Reunião de apresentação do sistema</li>
                            <li>Análise de requisitos específicos</li>
                            <li>Recebimento de proposta comercial</li>
                            <li>Assinatura do Contrato de Prestação de Serviços</li>
                            <li>Pagamento do valor de implementação para início do projeto</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">4.2. Prazo de Implementação</h3>
                        <p className="text-muted-foreground">
                            O prazo de implementação será definido em contrato, variando conforme complexidade e customizações solicitadas.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. CADASTRO E ACESSO</h2>

                        <p className="text-muted-foreground mb-4">
                            5.1. Após a implementação, serão fornecidas credenciais de acesso administrativo ao sistema.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">5.2. O Cliente é responsável por:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Manter a confidencialidade de suas credenciais de acesso</li>
                            <li>Gerenciar usuários e permissões em sua instância</li>
                            <li>Todas as atividades realizadas através de sua conta</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.3. É proibido:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Compartilhar credenciais administrativas com terceiros não autorizados</li>
                            <li>Permitir acesso de concorrentes ao sistema</li>
                            <li>Utilizar o sistema para fins ilícitos</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. USO ACEITÁVEL</h2>

                        <p className="text-muted-foreground mb-4">
                            6.1. O Cliente concorda em utilizar o sistema apenas para fins legítimos relacionados à sua operação comercial.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">6.2. É expressamente proibido:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Violar leis aplicáveis, locais, estaduais ou federais</li>
                            <li>Upload de conteúdo ofensivo, difamatório, pornográfico ou ilegal</li>
                            <li>Tentar obter acesso não autorizado a outras instâncias do sistema</li>
                            <li>Realizar engenharia reversa ou cópia do código-fonte</li>
                            <li>Revender, sublicenciar ou disponibilizar o sistema a terceiros sem autorização</li>
                            <li>Utilizar o sistema para envio de spam ou mensagens não solicitadas em massa</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. PROPRIEDADE INTELECTUAL</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>7.1. Propriedade do Sistema:</strong> Todo o software, código-fonte, design, arquitetura e
                            documentação do sistema são de propriedade exclusiva da Concessionária Inteligente.
                        </p>

                        <p className="text-muted-foreground mb-4">
                            <strong>7.2. Licença de Uso:</strong> O Cliente recebe uma licença não exclusiva, intransferível e
                            limitada para utilizar o sistema conforme os termos contratados.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">7.3. Propriedade dos Dados</h3>
                        <p className="text-muted-foreground mb-2">O Cliente retém total propriedade sobre:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Dados de veículos cadastrados</li>
                            <li>Informações de clientes e leads</li>
                            <li>Imagens e mídias enviadas ao sistema</li>
                            <li>Conteúdo gerado através da utilização</li>
                        </ul>

                        <p className="text-muted-foreground">
                            7.4. O Cliente não adquire qualquer direito de propriedade sobre o sistema, apenas direito de uso
                            durante a vigência do contrato.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. DADOS E PRIVACIDADE</h2>

                        <p className="text-muted-foreground mb-4">
                            8.1. O tratamento de dados pessoais está detalhado em nossa Política de Privacidade e segue rigorosamente a LGPD.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">8.2. Responsabilidades do Cliente:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Obter consentimento de seus clientes finais para coleta e tratamento de dados</li>
                            <li>Informar aos titulares sobre o uso de chatbot automatizado</li>
                            <li>Garantir legitimidade dos dados inseridos no sistema</li>
                            <li>Cumprir com suas obrigações como Controlador de dados</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">8.3. Responsabilidades da Concessionária Inteligente:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Atuar como Operador de dados conforme LGPD</li>
                            <li>Implementar medidas de segurança adequadas</li>
                            <li>Processar dados apenas conforme instruções do Cliente</li>
                            <li>Auxiliar o Cliente no cumprimento de obrigações legais</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. PAGAMENTO E CONDIÇÕES FINANCEIRAS</h2>

                        <h3 className="text-xl font-semibold mb-3">9.1. Valor de Implementação:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Pagamento único antes do início da implementação</li>
                            <li>Valores definidos em proposta comercial</li>
                            <li>Pode ser parcelado conforme acordo comercial</li>
                            <li>Não reembolsável após início da implementação</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">9.2. Mensalidade de Manutenção:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Cobrança recorrente mensal</li>
                            <li>Vencimento conforme data definida em contrato</li>
                            <li>Pagamento antecipado</li>
                            <li>Reajuste anual pelo IGPM ou índice acordado</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">9.3. Inadimplência:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Após 5 dias de atraso: notificação e cobrança de multa de 2% + juros de 1% ao mês</li>
                            <li>Após 15 dias de atraso: suspensão temporária do acesso ao sistema</li>
                            <li>Após 30 dias de atraso: suspensão total e possível rescisão contratual</li>
                            <li>Após 60 dias de atraso: exclusão de dados conforme política de retenção</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">9.4. Serviços Adicionais:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Customizações extras não previstas em contrato serão orçadas separadamente</li>
                            <li>Treinamentos adicionais podem gerar custos extras</li>
                            <li>Integrações com sistemas de terceiros podem ter custo adicional</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. VIGÊNCIA E RESCISÃO</h2>

                        <h3 className="text-xl font-semibold mb-3">10.1. Vigência do Contrato:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Prazo mínimo de 12 meses a partir da data de ativação</li>
                            <li>Renovação automática por períodos iguais, salvo manifestação contrária com 30 dias de antecedência</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">10.2. Cancelamento pelo Cliente:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Somente após período mínimo de 12 meses</li>
                            <li>Comunicação por escrito com 30 dias de antecedência</li>
                            <li>Quitação de todas as mensalidades pendentes</li>
                            <li>Sem reembolso do valor de implementação</li>
                            <li>Exportação de dados disponível por 30 dias após término</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">10.3. Rescisão pela Concessionária Inteligente:</h3>
                        <p className="text-muted-foreground mb-2">Podemos rescindir o contrato em caso de:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Inadimplência superior a 60 dias</li>
                            <li>Violação grave destes Termos</li>
                            <li>Uso fraudulento ou criminoso do sistema</li>
                            <li>Impossibilidade técnica de manter o serviço</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">10.4. Pós-Cancelamento:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Acesso ao sistema é encerrado na data de término</li>
                            <li>Dados mantidos por 30 dias para exportação</li>
                            <li>Após 30 dias, dados são permanentemente excluídos</li>
                            <li>Backup de segurança mantido por 90 dias adicionais (inacessível ao cliente)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">11. SUPORTE TÉCNICO E SLA</h2>

                        <h3 className="text-xl font-semibold mb-3">11.1. Canais de Suporte:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>E-mail de suporte técnico</li>
                            <li>Sistema de tickets</li>
                            <li>WhatsApp para urgências (conforme disponibilidade)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">11.2. Horário de Atendimento:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Segunda a Sexta: 9h às 18h (horário de Brasília)</li>
                            <li>Suporte emergencial 24/7 para questões críticas (conforme plano)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">11.3. Tempo de Resposta (SLA):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Crítico (sistema fora do ar): até 2 horas</li>
                            <li>Alto (funcionalidade importante não funciona): até 8 horas</li>
                            <li>Médio (bugs não críticos): até 24 horas</li>
                            <li>Baixo (dúvidas e melhorias): até 48 horas</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">11.4. O suporte técnico não inclui:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Treinamento de novos funcionários após período de implementação</li>
                            <li>Consultoria comercial ou de vendas</li>
                            <li>Customizações não previstas em contrato</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">12. LEI APLICÁVEL E FORO</h2>

                        <p className="text-muted-foreground mb-4">
                            12.1. Estes Termos são regidos pelas leis da República Federativa do Brasil.
                        </p>

                        <p className="text-muted-foreground">
                            12.2. Fica eleito o foro da comarca de Pelotas, RS, com exclusão de qualquer outro, por mais
                            privilegiado que seja, para dirimir quaisquer questões oriundas destes Termos.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">13. CONTATO</h2>

                        <p className="text-muted-foreground mb-2">Para questões relacionadas a estes Termos de Uso:</p>
                        <ul className="list-none space-y-2 text-muted-foreground">
                            <li><strong>E-mail:</strong> erickai.contato@gmail.com</li>
                            <li><strong>WhatsApp:</strong> (53) 99163-1843</li>
                            <li><strong>Endereço:</strong> Pelotas, RS - Brasil</li>
                        </ul>
                    </section>

                    <div className="mt-12 p-6 glass-card rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Ao utilizar a plataforma Concessionária Inteligente, você declara ter lido, compreendido e concordado
                            com todos os termos e condições aqui estabelecidos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
