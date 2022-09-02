import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import PageSection from "../components/ui/PageSection";
import useLocalStorage from "../hooks/useLocalStorage";

const BookNowStage2 = () => {
  const [userServiceSelections, _] = useLocalStorage(
    "user-service-selections",
    null
  );
  return (
    <Layout>
      <main>
        <h2 className="page-heading">Book Now</h2>
        <PageSection>
          <section className="grid grid-cols-2">
            <article>
              <Card>
                <div className="card-body">
                  <h3 className="card-title font-bold">Summary</h3>
                  <div className="card-text">
                    <p>
                      <span>Selected Package: </span>
                      <span className="font-semibold">
                        {userServiceSelections?.service?.label}
                      </span>
                    </p>
                    <p>
                      <span>Car Type: </span>
                      <span className="font-semibold">
                        {userServiceSelections?.carType?.label}
                      </span>
                    </p>
                    <p>
                      <span>AddOns: </span>
                      <span className="font-semibold">
                        {userServiceSelections?.addOns
                          ?.map((addOn) => addOn.label)
                          .join(", ")}
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </article>
          </section>
        </PageSection>
      </main>
    </Layout>
  );
};

export default BookNowStage2;
