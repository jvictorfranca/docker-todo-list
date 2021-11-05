const { readCommand } = require('../util');
const { requirements } = require('../../.trybe/requirements.json');

describe(requirements[0].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command01.dc'", async () => {
    const { stdout: result } = await readCommand(1);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toHaveLength(64);

    const { stdout: commandValidation } = await
    readCommand(false, `docker inspect --format="{{(index .Name)}};{{(index .Id)}};{{(index .Image)}}" ${result}`, false);
    expect(commandValidation)
      .toStrictEqual(`/01container;${result};sha256:48b8ec4ed9ebc29a5c6178a5267c3a9e12fb5e9923fc7bad3b494b9a6a491b68`);
  });
});

describe(requirements[1].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command02.dc'", async () => {
    const { stdout: createdValidation } = await
      readCommand(false, 'docker inspect --format="{{(index .Name)}};{{(index .Image)}};{{(index .State.Status)}};{{(index .State.Running)}}" 01container', false);
    expect(createdValidation)
      .toStrictEqual('/01container;sha256:48b8ec4ed9ebc29a5c6178a5267c3a9e12fb5e9923fc7bad3b494b9a6a491b68;created;false');
    
    const { stdout: result } = await readCommand(2);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('01container');

    const { stdout: startValidation } = await
      readCommand(false, 'docker inspect --format="{{(index .Name)}};{{(index .Image)}};{{(index .State.Status)}};{{(index .State.Running)}}" 01container', false);
    expect(startValidation)
      .toStrictEqual('/01container;sha256:48b8ec4ed9ebc29a5c6178a5267c3a9e12fb5e9923fc7bad3b494b9a6a491b68;running;true');
  });
});

describe(requirements[2].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command03.dc'", async () => {
    const { stdout: result } = await readCommand(3);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('alpine:3.12');
    expect(result).toContain('/bin/sh');
    expect(result).toContain('Up');
    expect(result).toContain('second');
    expect(result).toContain('01container');

    const { stdout: containerCounter } = await readCommand(false, 'docker ps -aq | wc -l', false);
    expect(containerCounter).toStrictEqual('1');
  });
});

describe(requirements[3].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command04.dc'", async () => {
    const { stdout: result } = await readCommand(4);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('NAME="Alpine Linux"');
    expect(result).toContain('ID=alpine');
    expect(result).toContain('VERSION_ID=3.12');
  });
});

describe(requirements[4].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command05.dc'", async () => {
    const { stdout: result } = await readCommand(5);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('01container');
  });
  it("O avaliador deve executar o comando no arquivo 'command03.dc' para validar esse resultado", async () => {
    const { stdout: result } = await readCommand(3);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).not.toContain('alpine:3.12');
    expect(result).not.toContain('/bin/sh');
    expect(result).not.toContain('Up');
    expect(result).not.toContain('second');
    expect(result).not.toContain('01container');

    const { stdout: containerCounter } = await readCommand(false, 'docker ps -aq | wc -l', false);
    expect(containerCounter).toStrictEqual('0');
  });
});
