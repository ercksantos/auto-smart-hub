import { ArrowLeft, Shield, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const LGPD = () => {
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
                                <a href="/politica-de-privacidade">Privacidade</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container-custom py-12 max-w-4xl">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-2">LGPD - Conformidade e Proteção de Dados</h1>
                    <p className="text-muted-foreground mb-8">Última atualização: 14 de janeiro de 2026</p>

                    {/* Hero Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-12 not-prose">
                        <div className="glass-card p-6 text-center">
                            <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">Proteção Total</h3>
                            <p className="text-sm text-muted-foreground">Conformidade 100% com LGPD</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <Lock className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">Dados Seguros</h3>
                            <p className="text-sm text-muted-foreground">Criptografia e backups diários</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <FileCheck className="w-10 h-10 text-violet-400 mx-auto mb-3" />
                            <h3 className="font-semibold mb-2">Transparência</h3>
                            <p className="text-sm text-muted-foreground">Controle total sobre seus dados</p>
                        </div>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. NOSSO COMPROMISSO COM A LGPD</h2>
                        <p className="text-muted-foreground">
                            A Concessionária Inteligente está plenamente comprometida com a proteção de dados pessoais e o cumprimento
                            da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Esta seção complementa nossa Política de Privacidade
                            com informações específicas sobre conformidade.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. PRINCÍPIOS APLICADOS</h2>
                        <p className="text-muted-foreground mb-4">Seguimos rigorosamente os princípios da LGPD:</p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Finalidade:</strong> tratamento para propósitos legítimos, específicos e informados</li>
                            <li><strong>Adequação:</strong> compatibilidade com finalidades informadas</li>
                            <li><strong>Necessidade:</strong> limitação ao mínimo necessário</li>
                            <li><strong>Livre acesso:</strong> garantia de consulta facilitada e gratuita</li>
                            <li><strong>Qualidade dos dados:</strong> garantia de exatidão, clareza e atualização</li>
                            <li><strong>Transparência:</strong> informações claras e acessíveis</li>
                            <li><strong>Segurança:</strong> medidas técnicas e administrativas adequadas</li>
                            <li><strong>Prevenção:</strong> adoção de medidas para prevenir danos</li>
                            <li><strong>Não discriminação:</strong> impossibilidade de tratamento para fins discriminatórios</li>
                            <li><strong>Responsabilização:</strong> demonstração de medidas eficazes de cumprimento</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. BASES LEGAIS UTILIZADAS</h2>

                        <h3 className="text-xl font-semibold mb-3">3.1. Para Tratamento de Dados de Clientes (Concessionárias):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li><strong>Art. 7º, V - Execução de contrato:</strong> prestação do serviço contratado</li>
                            <li><strong>Art. 7º, VI - Exercício regular de direitos:</strong> defesa em processos, cobrança</li>
                            <li><strong>Art. 7º, IX - Legítimo interesse:</strong> melhorias do sistema, segurança</li>
                            <li><strong>Art. 7º, II - Cumprimento de obrigação legal:</strong> obrigações fiscais e tributárias</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.2. Para Tratamento de Dados de Usuários Finais (em nome do Controlador):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Art. 7º, I - Consentimento:</strong> quando solicitado pelo Controlador</li>
                            <li><strong>Art. 7º, V - Execução de contrato:</strong> processamento de pedidos e vendas</li>
                            <li><strong>Art. 7º, IX - Legítimo interesse:</strong> análise de crédito, prevenção a fraudes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. PAPEL DE OPERADOR</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>4.1. Atuamos como Operador</strong> conforme Art. 5º, VII da LGPD.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">4.2. Obrigações como Operador (Art. 39):</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Seguir instruções do Controlador</li>
                            <li>Tratar dados conforme finalidades autorizadas</li>
                            <li>Respeitar todos os princípios da LGPD</li>
                            <li>Implementar medidas de segurança adequadas</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">4.3. Responsabilidades:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Respondemos solidariamente por danos causados por tratamento irregular</li>
                            <li>Apenas quando descumprimos obrigações da LGPD ou instruções do Controlador</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. DIREITOS DOS TITULARES (Art. 18)</h2>
                        <p className="text-muted-foreground mb-4">
                            Auxiliamos nossos clientes (Controladores) a garantir os direitos dos titulares:
                        </p>

                        <h3 className="text-xl font-semibold mb-3">5.1. Confirmação e Acesso (Incisos I e II)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Sistema permite ao Controlador exportar dados do titular</li>
                            <li>Fornecemos ferramentas para busca e visualização</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.2. Correção (Inciso III)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Controlador pode editar dados diretamente no sistema</li>
                            <li>Titulares podem solicitar correções ao Controlador</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.3. Anonimização, Bloqueio ou Eliminação (Inciso IV)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Funcionalidades de exclusão disponíveis ao Controlador</li>
                            <li>Dados são permanentemente removidos conforme solicitação</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.4. Portabilidade (Inciso V)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Exportação em formato JSON/CSV</li>
                            <li>Dados estruturados e legíveis por máquina</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.5. Eliminação de Dados com Consentimento (Inciso VI)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Exclusão imediata mediante solicitação</li>
                            <li>Confirmação de exclusão fornecida</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.6. Informação sobre Compartilhamento (Inciso VII)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Listamos terceiros com quem dados são compartilhados</li>
                            <li>Finalidade de cada compartilhamento é informada</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. SEGURANÇA E BOAS PRÁTICAS</h2>

                        <h3 className="text-xl font-semibold mb-3">6.1. Medidas Técnicas Implementadas:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Criptografia AES-256 para dados em repouso</li>
                            <li>TLS 1.3 para dados em trânsito</li>
                            <li>Controle de acesso baseado em papéis (RBAC)</li>
                            <li>Autenticação multifator (2FA) disponível</li>
                            <li>Logs de auditoria imutáveis</li>
                            <li>Monitoramento 24/7 de ameaças</li>
                            <li>Testes de penetração periódicos</li>
                            <li>Backup automático diário com retenção de 30 dias</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">6.2. Medidas Organizacionais:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Política de Segurança da Informação</li>
                            <li>Treinamento anual obrigatório em LGPD</li>
                            <li>Acordo de Confidencialidade com todos colaboradores</li>
                            <li>Processo de resposta a incidentes documentado</li>
                            <li>Due diligence de fornecedores terceiros</li>
                            <li>Avaliação de impacto de privacidade (DPIA) para novos recursos</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">6.3. Privacy by Design:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Privacidade incorporada desde o design do sistema</li>
                            <li>Minimização de dados por padrão</li>
                            <li>Pseudonimização quando possível</li>
                            <li>Transparência em todas as operações de dados</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. RELATÓRIO DE IMPACTO À PROTEÇÃO DE DADOS (RIPD)</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>7.1.</strong> Realizamos Relatórios de Impacto para operações de alto risco, avaliando:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Natureza, escopo e finalidade do tratamento</li>
                            <li>Riscos para direitos e liberdades dos titulares</li>
                            <li>Medidas de mitigação implementadas</li>
                            <li>Salvaguardas e mecanismos de segurança</li>
                        </ul>

                        <p className="text-muted-foreground">
                            <strong>7.2.</strong> O RIPD é revisado periodicamente e sempre que há mudanças significativas no
                            tratamento de dados.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>8.1.</strong> Quando necessário transferir dados para fora do Brasil:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Utilizamos Cláusulas Contratuais Padrão aprovadas</li>
                            <li>Verificamos adequação do país de destino</li>
                            <li>Garantimos nível de proteção equivalente à LGPD</li>
                            <li>Informamos titulares sobre a transferência</li>
                        </ul>

                        <p className="text-muted-foreground">
                            <strong>8.2.</strong> Principais países para onde dados podem ser transferidos: Estados Unidos (servidores
                            de infraestrutura em nuvem certificados).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. ENCARREGADO DE DADOS (DPO)</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>9.1.</strong> Designamos um Encarregado de Proteção de Dados conforme Art. 41 da LGPD.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">9.2. Atribuições do DPO:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Aceitar reclamações e comunicações dos titulares</li>
                            <li>Prestar esclarecimentos e adotar providências</li>
                            <li>Receber comunicações da ANPD e adotar providências</li>
                            <li>Orientar funcionários e contratados sobre práticas de proteção de dados</li>
                            <li>Supervisar implementação e conformidade com LGPD</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">9.3. Contato com DPO:</h3>
                        <ul className="list-none space-y-2 text-muted-foreground">
                            <li><strong>E-mail:</strong> dpo@concessionaria-inteligente.com</li>
                            <li><strong>WhatsApp:</strong> (53) 99163-1843</li>
                            <li><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. NOTIFICAÇÃO DE INCIDENTES</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>10.1.</strong> Em caso de incidente de segurança (Art. 48):
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Notificamos o Controlador em até 24 horas</li>
                            <li>Comunicamos à ANPD em prazo adequado (quando aplicável)</li>
                            <li>Informamos medidas técnicas e de segurança adotadas</li>
                            <li>Indicamos riscos relacionados ao incidente</li>
                            <li>Detalhamos motivos da eventual demora na comunicação</li>
                            <li>Listamos medidas para reverter ou mitigar efeitos</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">10.2. Processo de Resposta a Incidentes:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li><strong>Detecção:</strong> Monitoramento contínuo identifica anomalias</li>
                            <li><strong>Contenção:</strong> Isolamento imediato do problema</li>
                            <li><strong>Análise:</strong> Investigação da causa raiz</li>
                            <li><strong>Erradicação:</strong> Remoção da vulnerabilidade</li>
                            <li><strong>Recuperação:</strong> Restauração de serviços</li>
                            <li><strong>Lições aprendidas:</strong> Documentação e melhorias</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">11. RESPONSABILIDADE E RESSARCIMENTO</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>11.1.</strong> Conforme Art. 42 da LGPD, o operador responde solidariamente quando:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Descumpre obrigações da legislação</li>
                            <li>Não segue instruções lícitas do controlador</li>
                            <li>Descumpre suas próprias obrigações</li>
                        </ul>

                        <p className="text-muted-foreground mb-4">
                            <strong>11.2.</strong> Mantemos seguro de responsabilidade civil para cobrir eventuais danos causados
                            por incidentes de dados.
                        </p>

                        <p className="text-muted-foreground">
                            <strong>11.3.</strong> Registramos todas as operações de tratamento para demonstrar conformidade
                            (accountability).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">12. CAPACITAÇÃO E CONSCIENTIZAÇÃO</h2>

                        <h3 className="text-xl font-semibold mb-3">12.1. Programa de Treinamento:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Treinamento obrigatório anual sobre LGPD para toda equipe</li>
                            <li>Simulações de resposta a incidentes</li>
                            <li>Atualizações sobre mudanças na legislação</li>
                            <li>Certificações em proteção de dados para equipe técnica</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">12.2. Conscientização de Clientes:</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Guias de boas práticas para Controladores</li>
                            <li>Webinars sobre conformidade com LGPD</li>
                            <li>Documentação atualizada sobre tratamento de dados</li>
                            <li>Suporte na implementação de políticas de privacidade</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">13. AUDITORIA E CONFORMIDADE</h2>

                        <p className="text-muted-foreground mb-4">
                            <strong>13.1.</strong> Realizamos auditorias periódicas:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                            <li>Auditoria interna trimestral de processos de tratamento</li>
                            <li>Auditoria externa anual por empresa especializada</li>
                            <li>Testes de penetração semestrais</li>
                            <li>Revisão de contratos com fornecedores</li>
                        </ul>

                        <p className="text-muted-foreground">
                            <strong>13.2.</strong> Relatórios de auditoria disponíveis para clientes mediante solicitação.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">14. CONTATO PARA QUESTÕES DE LGPD</h2>

                        <p className="text-muted-foreground mb-2">Para questões específicas sobre LGPD e proteção de dados:</p>
                        <ul className="list-none space-y-2 text-muted-foreground mb-4">
                            <li><strong>DPO:</strong> dpo@concessionaria-inteligente.com</li>
                            <li><strong>Geral:</strong> erickai.contato@gmail.com</li>
                            <li><strong>WhatsApp:</strong> (53) 99163-1843</li>
                            <li><strong>Endereço:</strong> Pelotas, RS - Brasil</li>
                        </ul>

                        <p className="text-muted-foreground">
                            <strong>Horário de atendimento:</strong> Segunda a Sexta, das 9h às 18h (horário de Brasília)
                        </p>
                    </section>

                    <div className="mt-12 p-6 glass-card rounded-lg border-l-4 border-cyan-400">
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-cyan-400" />
                            Compromisso com Transparência
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            A Concessionária Inteligente mantém compromisso contínuo com a proteção de dados pessoais e conformidade
                            com a LGPD. Este documento é atualizado regularmente para refletir nossas práticas e mudanças na legislação.
                            Para mais informações, consulte nossa Política de Privacidade ou entre em contato com nosso DPO.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LGPD;
