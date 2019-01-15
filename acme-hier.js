const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

// // showManagementStructure(users);
// // /*
// // moe
// //  - larry
// // 	        - curly
// //  - shep
// // 	        - groucho
// // */

function showManagementStructure(users) {
  let structure = '';
  for (let i = 0; i < users.length; i++) {
    let current = users[i]
    if (!current.managerId) {
      structure += current.name;
    } else if (current.managerId === 1) {
        structure += '\n' + ` - ${current.name}`
      } else {
        structure += `\n` + `         - ${current.name}`
      }
    }
  return structure
}



showManagementStructure(users)
