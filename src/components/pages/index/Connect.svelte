<section id="connect" class="connect relative rounded-b-3xl overflow-hidden shadow-sm transition-colors duration-300 border-white dark:border-primary border-b border-opacity-10 dark:border-opacity-10">
  <div class="container py-10 lg:py-20 relative">
    <div class="heading">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M6.02 7.389c.399-.285.85-.417 1.292-.417.944 0 1.852.6 2.15 1.599-.382-.294-.83-.437-1.281-.437-.458 0-.919.147-1.321.434-.799.57-1.153 1.541-.845 2.461-1.242-.89-1.247-2.747.005-3.64zm3.741 12.77c.994.334 4.071 1.186 7.635 3.841l6.604-4.71c-1.713-2.402-1.241-4.082-2.943-6.468-1.162-1.628-1.827-1.654-3.037-1.432l.599.84c.361.507-.405 1.05-.764.544l-.534-.75c-.435-.609-1.279-.229-2.053-.051l.727 1.019c.36.505-.403 1.051-.764.544l-.629-.882c-.446-.626-1.318-.208-2.095-.01l.769 1.078c.363.508-.405 1.049-.764.544l-3.118-4.366c-.968-1.358-3.088.083-2.086 1.489l4.605 6.458c-.494-.183-1.363-.349-1.93-.349-1.754 0-2.429 1.92-.222 2.661zm-3.286-2.159h-4.475v-14h10v6.688l2-.471v-8.217c0-1.104-.895-2-2-2h-10c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 1.812 0 3.619-.299 4.944-.894-2.121-.946-6.378-1.576-5.474-5.106z"/></svg>
        <span>connect</span>
      </h1>
      <p>Wanna talk? Message me and I'll get back to you <br> as soon as I can</p>
    </div>

    <form class="mt-10" use:form>
      <div class="flex two-cols flex-wrap justify-between">
        <div class="form-group">
          <label class="block mb-2" for="first-name">First Name: <span class="text-tertiary">*</span></label>
          <input type="text" id="first-name" name="first_name" placeholder="Your first name" class="form-control">
          {#if $errors.first_name}
            <span class="validation-errors" transition:fade= {{ duration: 300 }}>{ $errors.first_name }</span>
          {/if}
        </div>
        
        <div class="form-group">
          <label class="block mb-2" for="last-name">Last Name: <span class="text-tertiary">*</span></label>
          <input type="text" id="last-name" name="last_name" placeholder="Your last name" class="form-control">
          {#if $errors.last_name}
            <span class="validation-errors" transition:fade>{ $errors.last_name }</span>
          {/if}
        </div>
      </div>

      <div class="flex two-cols flex-wrap justify-between">
        <div class="form-group">
          <label class="block mb-2" for="email">Email: <span class="text-tertiary">*</span></label>
          <input type="text" id="email" name="email" placeholder="Your email" class="form-control">
          {#if $errors.email}
            <span class="validation-errors" transition:fade>{ $errors.email }</span>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <label class="block mb-2" for="message">Message: <span class="text-tertiary">*</span></label>
        <textarea id="message" name="message" placeholder="Your message" rows="6" class="form-control"></textarea>
        {#if $errors.message}
          <span class="validation-errors" transition:fade>{ $errors.message }</span>
        {/if}
      </div>

      <div class="flex justify-end">
        <button class="submit btn btn-primary has-image" on:click={handleSubmit}>
          <span>Submit</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-white" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
        </button>
      </div>
    </form>
  </div>
</section>

<style>
  .two-cols .form-group {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .two-cols .form-group {
      width: 49%;
    }
  }

  .validation-errors {
    top: calc(100% + -4px);
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.4);
    @apply absolute bg-danger text-white text-sm z-[3] py-1 px-4 rounded-lg select-none left-[10px] duration-500;
  }

  .validation-errors::before {
    content: "";
    bottom: calc(100% - 1px);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #be123c;
    @apply absolute w-0 h-0 left-[17px] z-[1];
  }

  .submit {
    max-width: 150px;
    width: 100%;
  }
</style>

<script>
  import { createForm } from 'felte'
  import { validator } from '@felte/validator-yup'
  import * as yup from 'yup'
  import { fade } from 'svelte/transition';
  import Inquiry from '../../../services/Inquiry'

  /* data */
  const schema = yup.object({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    message: yup.string().required('Message is required')
  })

  const { form, errors, isValid } = createForm({
    initialValues: {
      first_name: 'asdasd',
      last_name: 'asdas',
      email: 'asdad@dddd.ddd',
      message: 'asdasd'
    },
    extend: validator({ schema }),
    onSubmit(values, context) {
      console.log(values)
      Inquiry.add(values).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  })

  function handleSubmit () {
    if (!$isValid) {
      setTimeout(() => {
        if (document.querySelectorAll('[aria-invalid="true"]').length > 0) {
          document.querySelector('[aria-invalid="true"]').scrollIntoView({
            behavior: 'smooth'
          })
        }
      }, 200)
    }
  }
</script>