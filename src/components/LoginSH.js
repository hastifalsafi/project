import React, {useContext, useEffect, useState} from "react";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios"
import {Link} from "react-router-dom";


const [linkto,setlinkto]=useState()
