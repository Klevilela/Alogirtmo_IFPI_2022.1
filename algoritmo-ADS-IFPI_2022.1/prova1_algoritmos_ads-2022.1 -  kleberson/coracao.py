idade = int(input('Informe a idade do usuário: '))
fc_atual = int(input('Informe a sua frequência cardíaca atual: '))

fc_max = 220 - idade

intensidade_moderada = fc_max * 0.5
intensidade_controle_do_peso = 0
intensidade_aerobica = 0
intensidade_anaerobica = 0
intensidade_esforco_max = 0

atividade_moderada = 60
controle_de_peso = 70
aerobica = 80
anaerobica = 90
esforco_maximo = 100

if fc_atual >= intensidade_moderada and fc_atual <= atividade_moderada:
    print('Zona da Frequência Cardíaca atual {} - moderada\nLimites da FC de acordo com a idade informada:  {} - {}'.format(fc_atual, 50, atividade_moderada))

if fc_atual >= 60 and fc_atual <= controle_de_peso:
    print('Zona da Frequência Cardíaca atual {}\nLimites da FC de acordo com a idade informada:  {} - {}'.format(fc_atual, 60, atividade_moderada)) 

if fc_atual >= controle_de_peso and fc_atual <= aerobica:
    print('Zona da Frequência Cardíaca atual {}\nLimites da FC de acordo com a idade informada:  {} - {}'.format(fc_atual, 70, atividade_moderada)) 

if fc_atual <= atividade_moderada:
    print('Zona da Frequência Cardíaca atual {}\nLimites da FC de acordo com a idade informada:  {} - {}'.format(fc_atual, 80, atividade_moderada))

if fc_atual <= atividade_moderada:
    print('Zona da Frequência Cardíaca atual {}\nLimites da FC de acordo com a idade informada:  {} - {}'.format(fc_atual, 90, atividade_moderada))
      