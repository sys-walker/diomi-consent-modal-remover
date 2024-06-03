console.log("WTF IS TO PAY TO REJECT COOKIEEEEEEES!!!!");

async function main() {
  const cookiesModal = await new Promise((resolve) => {
    setTimeout(() => {
      let d = document.getElementById("didomi-host");

      resolve(d);
    }, 1500);
  });
  if (!cookiesModal) {
    console.log("Didomi Host not found");
    return;
  } else {
    console.log("Didomi Host found: ", cookiesModal);
    cookiesModal.remove();
  }

  let body = document.getElementsByTagName("body");
  let bodyDoc = body[0];
  let bodyClassList = bodyDoc.classList;

  let classNameToRemove = "";
  for (let i = 0; i < bodyClassList.length; i++) {
    if (bodyClassList[i].includes("didomi")) {
      classNameToRemove = bodyClassList[i];
      break;
    }
  }
  if (classNameToRemove !== "") {
    bodyDoc.classList.remove(classNameToRemove);
    console.log("Class removed: ", classNameToRemove);
  } else {
    console.log("No class found to remove");
  }
}

main();
