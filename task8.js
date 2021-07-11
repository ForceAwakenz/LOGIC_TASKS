// 2. Задача на рефакторинг и деструктуризацию. Есть код:

const sarah = {
    name: 'Sarah',
    job: {
      name: 'Andersen',
      hiringDate: '23.07.2020'
    }
  }
  
// необходимо осуществить рефакторинг используя деструктуризацию над функцией без потери функциональности.

function printJobName(user) {
  const { job:
    { name: jobName = "Property 'Job name' doesn't exist" }
  } = user;
  console.log(jobName);
}

printJobName(sarah);
