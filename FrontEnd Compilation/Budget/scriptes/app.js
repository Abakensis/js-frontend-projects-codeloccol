class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  //Soumission du budget
  submitBudgetForm(){
   const value  = this.budgetInput.value;
   if(value ==='' || value<0){
     this.budgetFeedback.classList.add('showItem');
     // message quand le budget inseré est negatif ou null
     this.budgetFeedback.innerHTML = `<p>Vous ne pouvez pas inscrire un budget negatif ou null </p>`;
     const self = this;

     
     setTimeout(function(){
       self.budgetFeedback.classList.remove('showItem');
     },2000);
      
   }
   else{
     this.budgetAmount.textContent = value;
     this.budgetInput.value = '';
     this.showBalance();
   }
  }
  //Affichage du solde
  showBalance(){
   const  expense = this.totalExpense();
   const total = parseInt(this.budgetAmount.textContent) - expense;
   this.balanceAmount.textContent = total;
   if(total < 0){
     this.balance.classList.remove("showGreen","showBlack");
     this.balance.classList.add('showRed');
   }
  else if(total > 0){
    this.balance.classList.remove("showRed","showBlack");
    this.balance.classList.add("showGreen");
  }
  else if(total === 0){
    this.balance.classList.remove("showRed","showGreen");
    this.balance.classList.add("showBlack");
  }

  }
  //Soumission de la depense 
  submitExpenseForm(){
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if(expenseValue === '' || amountValue === '' || amountValue<0){
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML = `<p>Valeurs renseignées incorectes </p>`;
      const self = this;
      setTimeout(function(){
        self.expenseFeedback.classList.remove("showItem");
      },2000);
    }
    else{
      let amount = parseInt(amountValue);
      this.expenseInput.value = "";
      this.amountInput.value = "";
      
      let expense = {
        id:this.itemID,
        title:expenseValue,
        amount:amount,
      }
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
  }
  //ajout de la depense dans le dom
  addExpense(expense){
    const div  = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
        <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

        <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
            <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
            <i class="fas fa-trash"></i>
          </a>
        </div>
      </div>
    `;
    this.expenseList.appendChild(div);
  }


  //total depenses
  totalExpense(){
     let total = 0;
      if(this.itemList.length > 0){
        total = this.itemList.reduce(function(acc, curr){
          acc += curr.amount;
          return acc;
        },0);
      }
     this.expenseAmount.textContent = total;
     return total;
  }
  //edition des depenses 
  editExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //retrait des données du dom
    this.expenseList.removeChild(parent);
    //retrait de la lise d'elements 
    let expense = this.itemList.filter(function(item){
      return item.id === id;
    })
    //reafichage des valeurs 
    this.expenseInput.value = expense[0].title;
    this.amountInput.value= expense[0].amount;
    //Suppression de la liste
    let tempList = this.itemList.filter(function(item){
      return item.id !== id;
    })
    this.itemList = tempList;
    this.showBalance()
  }
  //suppression de depense 
  deleteExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //retrait du dom
    this.expenseList.removeChild(parent);
    //retrait de la liste 
    let tempList = this.itemList.filter(function(item){
      return item.id !== id;
    })
    this.itemList = tempList;
    this.showBalance()


  }
}

//ecouteur d'evennement des differents bouttons//
function eventListeners(){
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  //new instance of UI 
  const ui = new UI()
  // bouton d'ajout de budget
  budgetForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitBudgetForm();

  });
  // Bouton de soummission de depense 
  expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  });

  // actions sur les boutons edition et deletion sur la liste
  expenseList.addEventListener('click', function(event){
    if(event.target.parentElement.classList.contains('edit-icon')){
      ui.editExpense(event.target.parentElement)
    }
   else if(event.target.parentElement.classList.contains('delete-icon')){
      ui.deleteExpense(event.target.parentElement)
    }
  });
  

}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();

})