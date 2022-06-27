<template>
  <div class="main E-bg">
    <HeaderApp />
    <Hero src="contact.jpg" />
    <section class="contact-form">
      <div class="container">
        <div class="contact-wrapper">
          <form action="" class="myform">
            <h2>Write to Us</h2>
            <p>Send us a message and we'll get back to you right away!</p>
            <div class="input-box">
              <input
                type="text"
                name="name"
                class="right-margin"
                placeholder="Frist Name"
              />
              <input
                type="text"
                name="name"
                class="right-margin"
                placeholder="Last Name"
              />
              <input type="text" name="phone" placeholder="Phone" />
              <input
                type="email"
                name="email"
                class="right-margin"
                placeholder="Email"
              />
            </div>
            <textarea name="message" id="" cols="30" rows="5">
Message
            </textarea>
            <div class="book-buttons">
              <a class="btn btn-primary" href="#">SEND MESSAGE</a>
            </div>
          </form>
          <img src="../assets/img/infocontact.jpg" alt="" />
        </div>
      </div>
    </section>
    <section class="contact-details">
      <div class="container">
        <h2>Contact Details</h2>
        <div class="contact-detail-all">
          <div class="map">
            <img src="../assets/img/map.svg" alt="" />
          </div>
          <div class="contact-list">
            <img class="icon" src="../assets/img/icons/phone.svg" alt="" />
            <h4>Phone</h4>
            <div class="email-number">
              <div class="email">
                <h4>Entoto</h4>
                <p>+251933817881</p>

                <h4>bISHOFTU</h4>
                <p>+251933817881</p>
              </div>
              <div class="number">
                <h4>TANA</h4>
                <p>+251933817881</p>

                <h4>Entoto</h4>
                <p>+251933817881</p>
              </div>
            </div>
            <img class="icon" src="../assets/img/icons/email.svg" alt="" />
            <h4>Email</h4>
            <div class="email-number">
              <div class="email">
                <p>kuriftu@entotokuriftu.com</p>

                <p>kuriftu@bishoftukuriftu.com</p>
              </div>
              <div class="number">
                <p>kuriftu@kuriftulaketana.com</p>

                <p>kuriftu@kuriftuawash.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Sticky path="awash" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  .contact-form {
    margin-top: 6.25rem;
    .container {
      .contact-wrapper {
        overflow: hidden;
        .myform {
          place-content: center;
          h2 {
            @extend .title;
            margin-top: 0.94rem;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;

            color: $kuriftu-brown;
          }
          p {
            @extend .text;
            margin-top: 0.94rem;
            color: $kuriftu-black;
            font-size: 1rem;
            text-align: left;
            color: $kuriftu-grey;
          }
          input,
          textarea {
            background: $kuriftu-white;
            border-color: $kuriftu-grey;
            margin-top: 1rem;
            width: 21rem;
          }
          input[type="text"],
          input[type="email"] {
            padding: 1rem 0.8rem;
            color: $kuriftu-grey;
            border-style: solid;
            border-width: 1px;
          }
          textarea {
            padding: 1rem 0.8rem;
            color: $kuriftu-grey;
            border-style: solid;
            border-width: 1px;
          }
          .book-buttons {
            margin-top: 0.94rem;
            display: flex;
            justify-content: flex-end;
          }
        }
        img {
          margin-top: 0.94rem;
          width: 21rem;
          display: flex;
          place-items: center;
        }
      }
    }
  }
  @include responsive($md) {
    .contact-form {
      .container {
        .contact-wrapper {
          display: flex;
          gap: 1rem;
          .myform {
            place-content: center;
            .input-box {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0.5rem;
            }
            input {
              width: 12rem;
            }

            textarea {
              width: 24.5rem;
            }
            input[type="text"],
            input[type="email"] {
              padding: 1rem 0.8rem;
              color: $kuriftu-grey;
            }
          }
          img {
            margin-top: 0rem;
            width: 20rem;
            display: flex;
            place-items: center;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .contact-form {
      margin-top: 8.13rem;
      .container {
        .contact-wrapper {
          display: flex;
          justify-content: center;
          gap: 1rem;
          .myform {
            place-content: center;

            input {
              margin-top: 2rem;
              width: 15rem;
            }

            textarea {
              margin-top: 2rem;
              width: 30.5rem;
            }

            .book-buttons {
              margin-top: 2.88rem;
            }
          }
          img {
            margin-top: 0rem;
            width: 23rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .contact-form {
      .container {
        .contact-wrapper {
          display: flex;
          justify-content: center;
          gap: 3rem;
          .myform {
            place-content: center;
            .input-box {
              gap: 2rem;
            }
            input {
              margin-top: 2rem;
              width: 20rem;
            }

            textarea {
              margin-top: 3rem;
              width: 42rem;
            }

            .book-buttons {
              margin-top: 2.88rem;
            }
          }
          img {
            margin-top: 0rem;
            width: 30rem;
          }
        }
      }
    }
  }
  .contact-details {
    margin-top: 6.25rem;
    .container {
      h2 {
        color: $kuriftu-brown;
        @extend .title;
        margin-top: 0.94rem;
        margin-bottom: 2rem;
        text-align: left;
      }
      .contact-detail-all {
        .map {
        }
        .contact-list {
          margin-top: 2.88rem;
          .icon {
            width: 2rem;
            margin-top: 2.88rem;
          }
          h4 {
            @extend .title;
            margin-top: 0.94rem;
            font-size: 1.23rem;
            color: $kuriftu-black;
            text-align: left;
          }
          .email-number {
            .email {
              display: flex;
              gap: 1rem;
              h4 {
                @extend .title;
                margin-top: 0.94rem;
                font-size: 0.8rem;
                color: $kuriftu-black;
                text-align: left;
                text-transform: uppercase;
              }
              p {
                @extend .title;
                margin-top: 0.94rem;
                font-size: 0.8rem;
                color: $kuriftu-black;
                text-align: left;
              }
            }
            .number {
              display: flex;
              gap: 1rem;
              h4 {
                @extend .title;
                margin-top: 0.94rem;
                font-size: 0.8rem;
                color: $kuriftu-black;
                text-align: left;
                text-transform: uppercase;
              }
              p {
                @extend .title;
                margin-top: 0.94rem;
                font-size: 0.8rem;
                color: $kuriftu-black;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .contact-details {
      .container {
        .contact-detail-all {
          display: flex;
          justify-content: space-between;
          gap: 1rem;

          .contact-list {
            margin-top: 0rem;
            .icon {
              width: 1.8rem;
              margin-top: 1rem;
            }

            .email-number {
              .email {
                p {
                  font-weight: 200;
                }
              }
              .number {
                display: flex;
                gap: 1rem;

                p {
                  font-weight: 200;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .contact-details {
      margin-top: 8.13rem;
      .container {
        .contact-detail-all {
          margin-top: 3.37rem;

          .map {
            width: 25rem;
          }
          .contact-list {
            width: 30rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .contact-details {
      .container {
        .contact-detail-all {
          justify-content: center;
          margin-top: 4.37rem;
          gap: 5rem;

          .map {
            width: 30rem;
          }
          .contact-list {
            margin-top: 2rem;
            width: 30rem;
          }
        }
      }
    }
  }
  @include responsive($xxl) {
    .contact-details {
      .container {
        .contact-detail-all {
          gap: 10rem;
          .map {
            width: 35rem;
          }
          .contact-list {
            margin-top: 5rem;
            width: 30em;
          }
        }
      }
    }
  }
}
</style>
