const users = document.querySelector("#userDetails");
const search = document.querySelector("#input-search");
const msg = document.querySelector("#message");
const loading = document.querySelector("#spinner");

let user = [];

// fetch user
const usersDetails = async () => {
  loading.innerHTML = ` <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>`;
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    user = await response.json();
    console.log(user);
    getUsersDetails(user);
  } catch (error) {
    console.log(error);
  } finally {
    loading.innerHTML = " ";
  }
};

usersDetails();

// Render User Details

const getUsersDetails = (user) => {
  users.innerHTML = "";
  const userCards = user.map(
    ({ name: { firstname }, email, phone, address: { city } }) => {
      return ` <div class="col-sm-6 col-lg-4 mb-3 mb-sm-0 g-4">
    <div class="card  shadow p-3 mb-5 bg-body-tertiary rounded">
      <div class="card-body">
        <h5 class="card-title">Name: ${firstname}</h5>
        <p class="card-text">Email:  ${email}</p>
        <p class="card-text">Phone:  ${phone}</p>
        <p class="card-text">City:   ${city}</p>
      </div>
    </div>
  </div>`;
    },
  );
  users.innerHTML = userCards.join(" ");
};

// Search
search.addEventListener("input", (e) => {
  const filteredUsers = user.filter((u) => {
    return (
      u.name.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
      u.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });
  console.log(filteredUsers);
  if (filteredUsers.length === 0) {
    users.innerHTML = "";
    msg.innerHTML = `No such User Found`;
  } else {
    msg.innerHTML = "";
    getUsersDetails(filteredUsers);
  }
});
