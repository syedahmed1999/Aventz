importScripts("ngsw-worker.js");
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/dexie/1.3.6/dexie.min.js"
);

let db = new Dexie("storeApi");
db.version(1).stores({
  storeApi: "++id",
});

self.addEventListener("sync", (event) => {
  if (event.tag.includes("syncing")) {
    event.waitUntil(getDataFromindexDB());
  }
});

function getDataFromindexDB() {
  db.table("storeApi")
    .toArray()
    .then((res) => {
      hitAPI(res);
    });
}

function hitAPI(data) {
  for (let p of data) {
    fetch(p.url, {
      method: p.method,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        await deleteRecord(p.id);
      });
  }
}

async function deleteRecord(id) {
  await db.table("storeApi").delete(id);
}
