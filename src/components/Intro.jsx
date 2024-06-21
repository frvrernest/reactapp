import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/currencies.png"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Master Your Money <span className="accent">Simplify Your Life</span>
        </h1>
        <p>
          {/* Personal budgeting is the secret to financial freedom. Start your journey today. */}
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro