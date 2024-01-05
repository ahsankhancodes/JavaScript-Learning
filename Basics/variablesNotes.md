# variables.js Notes

## Const vs Let vs Var

**Const**
const is a keyword used to declare constants. There values can't change once they have been declared.<br>
Here is an example of const deceleration. 
`const accountID = 112233;` <br>
Here we declared a const with a name *accountID*.

**Let**
let is a keyword used to declare variables. There values can change once they have been declared.<br>
Here is an example of let deceleration. 
`let accountEmail = "ahsankhancodes@gmail.com";` <br>
Here we declared a let with a name *accountEmail*.

**What about Var??**
Var is an old keyword and we don't use it anymore. In modern JavaScript coding you'll always use let and const to declare variables and constant respectivally. <br>
***But Why***
Var decalares a variables too but there scope are not block restricted means a variables declared by var can be accessed globally, which creates abnormal behvaiour in program if you want to declare variable with same name in different blocks.

**If we don't declare any value.**
Here is an example.
`let accountState;` <br>
if we don't declare any value then it'll show you value *undefined*

