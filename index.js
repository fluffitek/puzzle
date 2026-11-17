var hash = "3eaea275ba68cfbe9bd33211a1dbb561fcf6f82dd539b4bbdb9a788ee8f50fec"
async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);          // UTF-8 bytes
  const hash = await crypto.subtle.digest("SHA-256", bytes); // ArrayBuffer, 32 bytes
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}

async function check()
{
    var entry = document.getElementById("code").value
    hex = await sha256Hex(entry)
    console.log(hex)
    if (hex == hash)
    {
        document.getElementById("result").innerHTML = "Correct answer. Well done!"
    }
    else
    {
        document.getElementById("result").innerHTML = "Keep trying!"
    }
}