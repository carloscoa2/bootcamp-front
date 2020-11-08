<template>
  <div>
    <h1>Bem vindo ao Petshop</h1>
    <form>
      <div>
        <label>Nome do cliente:</label>
        <input type="text" />
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <label>Raça do Cão:</label>
        <select>
          <option></option>
        </select>
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <label class="espaco-lado">Idade:</label>
        <input type="number" />
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <label class="espaco-lado">Serviço:</label>
        <select>
          <option></option>
        </select>
      </div>
      <div class="espaco-abaixo"></div>
      <div>
        <button>Cadastrar cliente</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.espaco-abaixo {
  margin-bottom: 10px;
}
</style>