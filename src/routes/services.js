const router = require("express").Router();

module.exports = (db, services) => {
  router.get("/services", (req, res) => {
    console.log("ping on services");
    db.query(
      `
        SELECT services.id, title, text_body, call_to_action, image_url
        FROM services
        JOIN serviceImages ON services.id = service_id;
      `
    )
      .then((data) => {
        // console.log(data);
        res.json(data.rows);
      })
      .catch((err) => {
        // console.log("bad juju on services DB", err);
        res.status(500).send("bad juju on services DB");
      });
  });

  router.get("/serviceTitles", (req, res) => {
    console.log("ping on services");
    db.query(
      `
        SELECT services.id, title
        FROM services;
      `
    )
      .then((data) => {
        // console.log(data);
        res.json(data.rows);
      })
      .catch((err) => {
        // console.log("bad juju on services DB", err);
        res.status(500).send("bad juju on services DB");
      });
  });


  router.put("/services", (req, res) => {
    console.log("req.body: ", req.body);
    const { updatedService } = req.body;
    const { serviceId, title, text_body, call_to_action } = updatedService;
    console.log(serviceId, title, text_body);
    const params = [serviceId, title, text_body, call_to_action];
    db.query(
      'UPDATE services SET title = $2, text_body = $3, call_to_action = $4 WHERE id = $1 returning *;',
      params)
      .then((data) => {
        console.log("success in update services! ", data);
        res.json(data.rows)
      })
      .catch((err) => {
        console.log("bad juju on update services DB", err);
        res.status(500).send("bad juju on update services DB");
      });
  });

  return router;
};
