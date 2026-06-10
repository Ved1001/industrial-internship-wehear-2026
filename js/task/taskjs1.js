const arr=[];

function update(e){
        e.preventDefault();

        const id = document.getElementById("from").getAttribute("ids1");
        const ele = arr.find((item)=>id==item.id);

        //const temp= document.getElementById("from").getAttribute("field");

            const updatename = document.getElementById("name");
            ele.name = updatename.value;

            const updateemail = document.getElementById("email");
            ele.email = updateemail.value;

            const updatemobile = document.getElementById("mobile");
            ele.mobile = updatemobile.value;

            const updateaddress = document.getElementById("address");
            ele.address = updateaddress.value;

            const updategen = document.getElementById("gen");
            ele.gen= updategen.value;

            const updatecon = document.getElementById("county");
            ele.con= updatecon.value;

            const updateterms = document.getElementById("term");
            ele.terms= updateterms.value;

            display();

            updatename.value = "";
            updateemail.value= "";
            updatemobile.value= "";
            updateaddress.value= "";
            updategen.value= "";
            updatecon.value= "";

            document.getElementById("sub").style.visibility="visible";
            document.getElementById("upt").style.visibility="hidden";

            return ;
}

function handleSubmit(e){

    e.preventDefault();

    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const address= document.getElementById("address").value;
    const gen= document.getElementById("gen").value;
    const con= document.getElementById("county").value;
    const terms= document.getElementById("term").value;

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("mobile").value="";
    document.getElementById("address").value="";
    document.getElementById("gen").value="";
    document.getElementById("county").value="";
    document.getElementById("term").value="";

    console.log(name);
     console.log(email);
      console.log(mobile);
       console.log(address);
        console.log(gen);
        console.log(con);
        console.log(terms);

    if(name.length == null){
        alert("enter valid name please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    if(email.length == null){
        alert("enter valid email please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    if(address.length == null){
        alert("enter valid address please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    if(gen.length == null){
        alert("enter valid gen please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    if(con.length == null){
        alert("enter valid country please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }
    
    if(mobile.length != 10){
        alert("Mobile number should be 10 digits please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    if(terms == "no"){
        alert("Please accept the terms and conditions");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
    }

    let idx=0;
    for(let i = 0; i < email.length; i++){
        if(email[i] == "@"){
            idx=i;
            break;
        }
    }

        if(idx == 0 || idx == email.length - 1){
        alert("enter valid email  1 please check");
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
        }
        
        let temp=0;
     for(let i=idx+1; i < email.length; i++){
        if(email[i] == "." ){
            temp=i;
        }
    }

    if(temp==0){
        alert("enter valid email 2 please check");
         console.log(email[i] != "." , i);
         console.log(email[i] == "@" , i);
         document.getElementById("name").value=name;
         document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
         return;
    }
    
    for(let i=0; i < email.length; i++){
        if(email[i] == " " || email[i] == "," || email[i] == "%" || email[i] == "!" ){
            alert("enter valid email 3 please check");    
            document.getElementById("name").value=name;            
            document.getElementById("email").value=email;
         document.getElementById("mobile").value=mobile;
         document.getElementById("address").value=address;
         document.getElementById("gen").value=gen;
         document.getElementById("county").value=con;
         document.getElementById("term").value=terms;
        return ;
        }
    }

    arr.push({id:Date.now(), name:name, email:email, mobile:mobile, address:address, gen:gen, con:con ,terms:terms});
    console.log(arr);

    display();
    return ;
}

function display(){

    const tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    for(let i = 0; i < arr.length; i++){

        const tr = document.createElement("tr");

         tr.id = `tr${Date.now()}${i}`;

        const td0 = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        const edit= document.createElement("button");
        const del= document.createElement("button");


        td0.innerHTML = i + 1;
        td1.innerHTML = arr[i].name;
        td2.innerHTML = arr[i].email;
        td3.innerHTML = arr[i].mobile;
        td4.innerHTML = arr[i].address;
        td5.innerHTML = arr[i].gen;
        td6.innerHTML = arr[i].con;
        td7.innerHTML = arr[i].terms;
        del.innerText = "Delete";
        edit.innerText = "Edit";


        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        td8.appendChild(edit);
        td8.appendChild(del);
        tr.appendChild(td8);

        tbody.appendChild(tr);

        del.onclick = function deleten(){
            const temp= document.getElementById(tr.id);
            temp.remove();
        }

        edit.onclick = function editen(e){
            edit.innerHTML="Update it";
            e.preventDefault();

            document.getElementById("name").value= arr[i].name;
            document.getElementById("email").value= arr[i].email;
            document.getElementById("mobile").value= arr[i].mobile;
            document.getElementById("address").value= arr[i].address;
            document.getElementById("gen").value= arr[i].gen;
            document.getElementById("county").value= arr[i].con;
            document.getElementById("term").value= arr[i].terms;
            document.getElementById("from").setAttribute("ids1",arr[i].id);
            //document.getElementById("from").setAttribute("field",arr[i]);

            document.getElementById("sub").style.visibility="hidden";
            document.getElementById("upt").style.visibility="visible";
            return ;
        }
    }

}