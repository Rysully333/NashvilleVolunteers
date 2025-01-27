import express from "express"
import * as organizationController from "../controllers/organizationController"

const router = express.Router()

router.route("/get-organizations").get(organizationController.getOrganizations)

router.route("/get-organization/:id").get(organizationController.getOrganization)

router.route("/create-organization").post(organizationController.createOrganization)

router.route("/update-organization/:id").put(organizationController.updateOrganization)

router.route("/delete-organization/:id").delete(organizationController.deleteOrganization)

export default router
