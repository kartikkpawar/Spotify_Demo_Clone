export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "YOUR_WEBSITE_URL";

const clientId = "TOKEN_KEY";

/* NOTE This are generaly the permissions for the user for what he will be able to do after login or to what features he will have the access  */
/* NOTE From Documentation  */
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // localhost:3000/# geting the accessToken after the #(hash)
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #access_token='MyTokenKey'
      let parts = item.split("=");

      initial[parts[0]] = decodeURI(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
