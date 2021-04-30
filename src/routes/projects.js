const router = require("express").Router();

module.exports = (db, projects) => {
  router.get("/projects", (req, res) => {
    console.log("ping on projects");
    db.query(
      `
        SELECT projects.id, title, text_body, text_body_background, project_url, page_id, projectImages.image_url, ARRAY_AGG(previewImages.image_url) as previewImages
        FROM projects
        JOIN projectImages ON projects.id = projectImages.project_id
        JOIN previewImages ON projects.id = previewImages.project_id
        GROUP BY projects.id, projectimages.image_url;
      `
    )
    .then(({ rows: projects }) => {
      console.log(       projects.reduce(
        (previous, current) => ({ ...previous, [current.page_id]: current }),
        {}
      ));
      res.json(
        projects.reduce(
          (previous, current) => ({ ...previous, [current.page_id]: current }),
          {}
        )
      );
    })
    .catch((err) => {
      // console.log("bad juju on projects DB", err);
      res.status(500).send("bad juju on projects DB");
    });
  });

  router.get("/projects/:id", (req, res) => {
    const params = [req.params.id];
    console.log("ping on projects");
    db.query(
      `
      SELECT projects.id, title, text_body, project_url, page_id, image_url
      FROM projects JOIN projectImages ON projects.id = projectImages.project_id WHERE page_id = $1;
      `,
      (params)
    )
      .then((data) => {
        console.log(data);
        res.json(data.rows);
      })
      .catch((err) => {
        console.log("bad juju on projects DB", err);
        res.status(500).send("bad juju on projects DB");
      });
  });


  router.put("/projects", (req, res) => {
    console.log("req.body: ", req.body);
    const { updatedproject } = req.body;
    const { projectId, title, text_body, call_to_action } = updatedproject;
    console.log(projectId, title, text_body);
    const params = [projectId, title, text_body, call_to_action];
    db.query(
      'UPDATE projects SET title = $2, text_body = $3, project_url = $4 WHERE id = $1 returning *;',
      params)
      .then((data) => {
        console.log("success in update projects! ", data);
        res.json(data.rows)
      })
      .catch((err) => {
        console.log("bad juju on update projects DB", err);
        res.status(500).send("bad juju on update projects DB");
      });
  });

  return router;
};
