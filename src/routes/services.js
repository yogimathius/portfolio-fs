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

  router.post("/services", (req, res) => {
    console.log(req.body);
    const { post_id, commenter_id, text_body, time_posted } = req.body;
    const param = [post_id, commenter_id, text_body, time_posted];
    db.query(
      `INSERT INTO services (post_id, commenter_id, text_body, time_posted) VALUES ($1, $2, $3, $4)
      RETURNING *`,
      param
    )
      .then((data) => {
        console.log("data in route: ", data.rows[0]);
        res.json(data.rows[0]);
      })
      .catch((err) => {
        console.log("bad juju on services DB", err);
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

  router.delete("/services", (req, res) => {
    console.log("req.body", req.body, req.query);
    const query = JSON.parse(req.query.removeComment);

    const { post_id, commenter_id, id } = query;
    const params = [post_id, commenter_id, id];
    console.log("params in delete comment post: ", params);

    db.query(
      `
      DELETE FROM services 
      WHERE post_id = $1 AND commenter_id = $2 AND id = $3;
      `,
      params
    )
      .then((data) => {
        console.log("data rows in comment post: ", data);
        res.json(data.rows); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.log("bad juju on services DB", err);
        res.status(500).send("bad juju on services DB");
      });
  });
  return router;
};
