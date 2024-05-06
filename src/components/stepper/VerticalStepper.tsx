import clsx from 'clsx'

type Props = {
  steps: {
    label: string
  }[]
}

export default function VerticalStepper({ steps }: Props) {
  return (
    <div className=" d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
      <div className="card-body ">
        <div className="stepper-nav">
          {steps.map((step, index) => (
            <div
              key={index}
              className={clsx('stepper-item', index === 0 && 'current')}
              data-kt-stepper-element="nav"
            >
              <div className="stepper-wrapper">
                <div className={'stepper-icon w-40px h-40px'}>
                  <i className="stepper-check fas fa-check"></i>
                  <span className="stepper-number text-white fs-6 fw-normal">{index + 1}</span>
                </div>
                <div className="stepper-label">
                  <h3 className="stepper-title text-white">{step.label}</h3>
                </div>
              </div>
              {index + 1 !== steps.length && <div className="stepper-line h-40px opacity-30"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
