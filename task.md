- UI/UX (figma)
  -- change font family DONE
  -- change palatte DONE
  -- optional dark mode DONE
  -- almost done na palitan nalng lahat ng name sa twconfig tapos yun mga overflow sa mga cards
  -- double check nalng yun ibang cards kung applicable
  -- animation ng socialmedia links

- Dark Mode
  -- first using next-theme and tailwindcss DONE (BEST)
  -- second using RTK and tailwindcss (WORST)

- done nako sa header section
- - ALL MUST BE IN CENTER WHEN HAVING A above XL SCREEN
- navbar section
  -- fix delayed opacity for menucontainer. must be equal to navbar opacity
  -- https://www.youtube.com/watch?v=yoMf7BOujLA
  -- mukhang may bug sa navbar section nasira ata yun tamang sukat DONE

- hero section
  -- referrence https://djudesign.com/  
  -- new task split the paragraph per whitespace or word not by letter
  --- working about implementation new animation but when inserting new function like join(' ') it becoming an [object object] therefore find a solution where combine the string word

- about section
- mostly sa about naman palitan mo ng icons yun mga expertise instead lang na name
  -- "react-icons/si" icons for expertiselist replace but images DONE
  -- dynamic image must be implemented DONE
  -- implement new div or section for expertise images parent set a w & h then children w & h a full object cover DONE

- project section
- after non projects naman ibahin yun size ng width ng per projects instead na fix lang nasisira siya sa large size on progress naman dine
  -- sizing an width is done DONE
  -- apply actual photos of projects DONE
  --- edit your photos in photoshop or illustrator DONE
  -- lalagyan ng mga animatestarggered per projects DONE
  --- implement but ang bilis nila

- contact section
  -- all about implementing emailjs for form submission DONE
  --- useref is the problem if i pull null inside (form.current change to e.currentTarget) DONE
  -- create a validation for input text if blank then it will not proceed to submission DONE
  -- seperate a form with new component DONE
  -- email at message lang siguro ang ilagay na validation DONE
  -- https://www.youtube.com/watch?v=bMq2riFCF90 REFERENCE
  -- https://www.geeksforgeeks.org/how-to-add-form-validation-in-next-js/ FORM VALIDATION REFERENCE
  -- https://canopas.com/next-js-how-to-validate-forms-on-the-server-side-using-zod USING ZOD VALIDATION
  -- https://github.com/httpArbaz/SignUp-Nextjs/blob/main/app/components/SignUpForm.js USING TSX
  -- https://upmostly.com/next-js/how-to-build-next-level-next-js-forms-with-form-validation
  -- https://fettblog.eu/typescript-react/events/ handling events
  -- https://javascript.plainenglish.io/react-typescript-handling-events-ab13d9778411 handling events
  -- https://stackoverflow.com/questions/67285413/how-to-set-the-correct-typescript-type-for-setvalue-in-react-hook-form (definitions for setvalue)
  -- form validation is working convert into useform and zod (codesandbox "react-hook-form practice" && codeevolution challenge)
  --- problem inside the onsubmit where finding the currenttarget is missing formvalues (try mo nga console yun ref ng form kung siya kumukha ng form values tapos siya rin mag send kay emailjs)
  -- https://www.youtube.com/watch?v=t2LvPXHLrek nodemailer instead of emailjs js nga lang
  -- https://medium.com/@zhixiang.peng/could-not-find-a-declaration-file-for-module-nodemailer-8f32ac686522 para roon sa error like module nodemailer is missing

- new works for contact
  -- Make a toast component whenever succeed message and error message DONE
  -- Add Zod if can be replace the typescript DONE
  -- Add a disable button before and after submitted DONE
