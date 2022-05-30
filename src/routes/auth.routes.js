import {Router} from 'express'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {authJwt} from '../middlewares'

//cuando añado el checkDuplicateUsernameOrEmail peta
router.post('/signup', 
    //[verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], 
    authCtrl.signup
)
router.post('/signin', authCtrl.signin)


router.post('/logout', authJwt.verifyToken, authCtrl.logout)

export default router;