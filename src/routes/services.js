const router = require("express").Router();

module.exports = (db, services) => {
  router.get("/services", (req, res) => {
    console.log("ping on services");
    db.query(
      `
        SELECT services.id, title, text_body, image_url
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


  router.put("/services", (req, res) => {
    console.log("req.body: ", req.body);
    const { updatedService } = req.body;
    const { serviceId, title, text_body } = updatedService;
    console.log(serviceId, title, text_body);
    const params = [serviceId, title, text_body];
    db.query(
      'UPDATE services SET title = $2, text_body = $3 WHERE id = $1 returning *;',
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
