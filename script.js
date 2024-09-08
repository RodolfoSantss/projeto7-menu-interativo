function executarPrograma() {
    let option
  
    do {
      option = prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n4. Opção 4\n5. Encerrar")
  
      switch(option) {
        case '1':
          alert("Você escolheu a Opção 1")
          break
        case '2':
          alert("Você escolheu a Opção 2")
          break
        case '3':
          alert("Você escolheu a Opção 3")
          break
        case '4':
          alert("Você escolheu a Opção 4")
          break
        case '5':
          alert("O sistema está sendo encerrado.")
          break
        default:
          alert("Opção inválida. Por favor, escolha uma opção entre 1 e 5.")
      }
    } while (option !== '5')
  }
  
  executarPrograma();